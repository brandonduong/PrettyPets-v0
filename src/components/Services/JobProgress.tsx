import React, {useEffect, useState} from "react";
import '../../styles/Home/index.css'
import {Button, Card} from "antd";
import {Job} from "../../API";
import {API} from "aws-amplify";
import {finishJob} from "../../graphql/mutations";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {removeJob} from "../../features/jobs/jobsSlice";
import {incrementByAmount} from "../../features/prettypoints/prettyPointsSlice";

interface JobProgressProps{
  job: Job
}

function JobProgress({job}: JobProgressProps) {
  const [timer, setTimer] = useState('')
  const completeTime = new Date(new Date(job.createdAt).setHours(new Date(job.createdAt).getHours() + job.length)).getTime()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const loop = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = completeTime - now;

      // Time calculations for days, hours, minutes and seconds
      // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      setTimer( hours + "h "
        + minutes + "m " + seconds + "s ")

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(loop);
        setTimer('Complete')
      }
    }, 1000)

    return() => {
      console.log('clear')
      clearInterval(loop);
    }
  }, [])

  async function completeJob() {
    const input = {
      id: job.id
    }
    try {
      const jobData: any = await API.graphql({query: finishJob, variables: input})
      console.log(jobData)
      const jobArr = jobData.data.finishJob
      dispatch(removeJob(jobArr))
      dispatch(incrementByAmount(job.payout))
    } catch (err) {
      console.log('error completing job: ', err)
    }
  }

  return (
      <Card className={"job-posting-card"}>
        <h4>{job.jobType}</h4>
        <h6>{timer}</h6>
        <Button type={"primary"} onClick={completeJob} disabled={!(timer === 'Complete')}>Complete</Button>
      </Card>
  );
}

export default JobProgress;
