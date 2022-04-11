import React from "react";
import JobPosting from "../../components/Services/JobPosting";
import JobProgress from "../../components/Services/JobProgress";
import {Col} from "react-bootstrap";
import {useAppSelector} from "../../app/hooks";

interface JobItem {
  jobType: string
  length: number
  setLength: Function
}

function JobBoardItem({jobType, length, setLength}:JobItem) {
  const jobs = useAppSelector((state) => state.jobs.value)
  const job = jobs!.filter(job => {return job.jobType === jobType})[0]

  return (
    <Col xs={12} sm={6} className={"job-posting"}>
        {jobs?.some(job => job.jobType === jobType) ?
          <JobProgress job={job}/>
          :
          <JobPosting jobType={jobType} length={length} setLength={setLength}/>
        }
    </Col>
  );
}

export default JobBoardItem;
