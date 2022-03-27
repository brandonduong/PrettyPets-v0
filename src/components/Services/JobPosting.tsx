import React, {useState} from "react";
import '../../styles/Home/index.css'
import {Button, Card, Slider} from "antd";
import {JobForm} from "../../types/custom";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {API} from "aws-amplify";
import {assignJob} from "../../graphql/mutations";
import {Col} from "react-bootstrap";
import {setJobs} from "../../features/jobs/jobsSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setSelectedPrettyPets} from "../../features/prettypets/prettyPetsSlice";

interface JobPost {
  jobType: string
}

function JobPosting({jobType}: JobPost) {
  const {user} = useAuthenticator((context) => [context.user]);
  const dispatch = useAppDispatch()
  const jobs = useAppSelector((state) => state.jobs.value)
  const petIds = useAppSelector((state) => state.prettyPets.selected)
  const [jobForm, setJobForm] = useState<JobForm>({
    jobType: jobType,
    email: user.username!,
    petIds: [],
    length: 0
  })

  async function assignJobOnClick() {
    console.log(petIds)
    if (!petIds.length || !jobForm.length) {
      return
    }
    console.log(jobForm)
    try {
      const jobData: any = await API.graphql({query: assignJob, variables: {...jobForm, petIds: petIds}})
      console.log('Job: ', jobData.data)
      dispatch(setJobs([...jobs, jobData.data.assignJob]))
      dispatch(setSelectedPrettyPets([]))
    } catch (err) {
      console.log('error creating job:', err)
    }
  }

  return (
      <Card className={"job-posting-card"}>
        <h4>{jobType}</h4>
        <Slider defaultValue={0} min={0} max={24} value={jobForm.length}
                onChange={(change) => setJobForm({...jobForm, length: change})}
                tipFormatter={(value) => {
                  return `${value} hours`
                }}
        />
        <Button type={"primary"} onClick={() => assignJobOnClick()}>Assign</Button>
      </Card>
  );
}

export default JobPosting;
