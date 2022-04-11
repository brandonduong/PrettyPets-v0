import React, {useState} from "react";
import '../../styles/Home/index.css'
import {Badge, Button, Card, InputNumber, Slider, Spin} from "antd";
import {JobForm} from "../../types/custom";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {API} from "aws-amplify";
import {assignJob} from "../../graphql/mutations";
import {setJobs} from "../../features/jobs/jobsSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setPrettyPets, setSelectedPrettyPets, updatePrettyPetsStatus} from "../../features/prettypets/prettyPetsSlice";
import {JobTypes, STAT_PAYOUT_FRACTION} from "../../constants/Job";
import {PrettyPet} from "../../API";
import {Container, Row, Col} from "react-bootstrap";

interface JobPost {
  jobType: string
  length: number
  setLength: Function
}

function JobPosting({jobType, length, setLength}: JobPost) {
  const user = useAppSelector((state) => state.prettyPoints.userId)
  const dispatch = useAppDispatch()
  const jobs = useAppSelector((state) => state.jobs.value)
  const petIds = useAppSelector((state) => state.prettyPets.selected)
  const pets = useAppSelector((state) => state.prettyPets.value)
  const [disabled, setDisabled] = useState(false)

  async function assignJobOnClick() {
    console.log(petIds)
    if (!petIds.length || !length) {
      return
    }
    try {
      setDisabled(true)
      const jobData: any = await API.graphql({
        query: assignJob,
        variables: {length, jobType: jobType, petIds: petIds, userId: user}
      })
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

      // Calculate money based on star
      if (!(petData.star <= petData.traits[1]!.length)) {
        starPayout += petData.star - petData.traits[1]!.length
      } else {
        // Minimum +1 from star
        starPayout += 1
      }

      // Calculate money based on stat
      const statPayoutFactor = (STAT_PAYOUT_FRACTION + petData.traits[1]!.length)
      switch (jobType) {
        case JobTypes.THERAPY:
          statPayout += petData.stats!.cool / statPayoutFactor;
          break;
        case JobTypes.EMOTIONAL:
          statPayout += petData.stats!.cute / statPayoutFactor;
          break;
        case JobTypes.FISHING:
          statPayout += petData.stats!.control / statPayoutFactor;
          break;
        case JobTypes.FORAGING:
          statPayout += petData.stats!.confidence / statPayoutFactor;
          break;
        default:
          break;
      }
    })

    let fullPayout = 0
    for (let i = 1; i <= length; i++) {
      fullPayout += (starPayout + statPayout) * (1 / Math.sqrt(i))
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
        <h3>{jobType}</h3>
        <h6>Pets with {calculateStatFactor()} get a bonus!</h6>
        {!disabled ?
          <Container>
            <h6>Time:</h6>
            <Row className={"job-posting-row"}>
              <Col>
                <Slider defaultValue={0} min={0} max={24} value={length}
                        onChange={(change) => setLength(change)}
                        tipFormatter={(value) => {
                          return `${value} hours`
                        }}
                />
              </Col>
              <Col xs={"auto"}>
                <InputNumber
                  min={0}
                  max={24}
                  style={{margin: '0 16px'}}
                  value={length}
                  onChange={(change) => setLength(change)}
                  precision={0}
                />
              </Col>
            </Row>
            <Button type={"primary"} onClick={() => assignJobOnClick()} disabled={disabled}>Assign</Button>
          </Container>
          : <div><Spin size="large"/></div>}
      </Card>
    </Badge.Ribbon>
  );
}

export default JobPosting;
