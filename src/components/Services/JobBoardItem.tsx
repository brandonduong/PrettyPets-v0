import React from "react";
import JobPosting from "../../components/Services/JobPosting";
import JobProgress from "../../components/Services/JobProgress";
import {Col} from "react-bootstrap";
import {useAppSelector} from "../../app/hooks";

interface JobItem {
  jobType: string
}

function JobBoardItem({jobType}:JobItem) {
  const jobs = useAppSelector((state) => state.jobs.value)
  const job = jobs!.filter(job => {return job.jobType === jobType})[0]

  return (
    <Col xs={6} className={"job-posting"}>
        {jobs?.some(job => job.jobType === jobType) ?
          <JobProgress job={job}/>
          :
          <JobPosting jobType={jobType}/>
        }
    </Col>
  );
}

export default JobBoardItem;
