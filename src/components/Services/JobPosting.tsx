import React, {useState} from "react";
import '../../styles/Home/index.css'
import {Badge, Button, Card, Slider, Spin} from "antd";
import {JobForm} from "../../types/custom";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {API} from "aws-amplify";
import {assignJob} from "../../graphql/mutations";
import {setJobs} from "../../features/jobs/jobsSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setPrettyPets, setSelectedPrettyPets, updatePrettyPetsStatus} from "../../features/prettypets/prettyPetsSlice";
import {JobTypes, STAT_PAYOUT_FRACTION} from "../../constants/Job";
import {PrettyPet} from "../../API";

interface JobPost {
  jobType: string
}

function JobPosting({jobType}: JobPost) {
  const {user} = useAuthenticator((context) => [context.user]);
  const dispatch = useAppDispatch()
  const jobs = useAppSelector((state) => state.jobs.value)
  const petIds = useAppSelector((state) => state.prettyPets.selected)
  const pets = useAppSelector((state) => state.prettyPets.value)
  const [jobForm, setJobForm] = useState<JobForm>({
    jobType: jobType,
    email: user.username!,
    petIds: [],
    length: 0
  })
  const [disabled, setDisabled] = useState(false)

  async function assignJobOnClick() {
    console.log(petIds)
    if (!petIds.length || !jobForm.length) {
      return
    }
    console.log(jobForm)
    try {
      setDisabled(true)
      const jobData: any = await API.graphql({query: assignJob, variables: {...jobForm, petIds: petIds}})
      console.log('Job: ', jobData.data)
      dispatch(setJobs([...jobs, jobData.data.assignJob]))
      dispatch(updatePrettyPetsStatus({busyPets: petIds, jobType}))
      dispatch(setSelectedPrettyPets([]))
    } catch (err) {
      console.log('error creating job:', err)
    }
  }

  function calculatePayout() {
    let starPayout = 0
    let statPayout = 0
    petIds.forEach((pet) => {
      const petData = pets.filter(p => {
        return p.id === pet
      })[0]
      starPayout += petData.star
      switch (jobType) {
        case JobTypes.THERAPY:
          statPayout += petData.stats!.cool;
          break;
        case JobTypes.EMOTIONAL:
          statPayout += petData.stats!.cute;
          break;
        case JobTypes.FISHING:
          statPayout += petData.stats!.control;
          break;
        case JobTypes.FORAGING:
          statPayout += petData.stats!.confidence;
          break;
        default:
          break;
      }
    })

    let fullPayout = 0
    for (let i = 1; i <= jobForm.length; i++) {
      fullPayout += (starPayout + (statPayout / STAT_PAYOUT_FRACTION)) * (1 / Math.sqrt(i))
    }
    return Math.floor(fullPayout)
  }

  function calculateStatFactor() {
    switch (jobType) {
      case JobTypes.THERAPY:
        return 'Cool'
      case JobTypes.EMOTIONAL:
        return 'Cute'
      case JobTypes.FISHING:
        return 'Control'
      case JobTypes.FORAGING:
        return 'Confidence'
      default:
        return
    }
  }

  return (
    <Badge.Ribbon color={"magenta"} text={`+${calculatePayout()} PrettyPoints`}
                  style={{display: calculatePayout() === 0 ? 'none' : 'block'}}>
      <Card className={"job-posting-card"}>
        <h4>{jobType}</h4>
        <h6>Pets with {calculateStatFactor()} get a bonus!</h6>
        {!disabled ?
          <div>
            <h6>Time:</h6>
            <Slider defaultValue={0} min={0} max={24} value={jobForm.length}
                    onChange={(change) => setJobForm({...jobForm, length: change})}
                    tipFormatter={(value) => {
                      return `${value} hours`
                    }}
            />
          </div>
          : <div><Spin size="large"/></div>}
        <Button type={"primary"} onClick={() => assignJobOnClick()} disabled={disabled}>Assign</Button>
      </Card>
    </Badge.Ribbon>
  );
}

export default JobPosting;
