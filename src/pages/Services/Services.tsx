import React, {useEffect, useState} from "react";
import '../../styles/Home/index.css'
import '../../styles/Services/index.css'
import {Container, Row} from "react-bootstrap";
import PetGallery from "../../components/Home/PetGallery";
import {API} from "aws-amplify";
import {listJobs} from "../../graphql/queries";
import {useAuthenticator} from "@aws-amplify/ui-react";
import JobBoardItem from "../../components/Services/JobBoardItem";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setJobs} from "../../features/jobs/jobsSlice";

const MAX_SELECTED = 6

function Services() {
  const {user} = useAuthenticator((context) => [context.user]);
  const jobsFetched = useAppSelector((state) => state.jobs.fetched)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!jobsFetched) {
      fetchJobs()
    }
  }, [])

  async function fetchJobs() {
    const filter = {
      owner: {
        eq: user.username
      },
      complete: {
        eq: false
      }
    }
    try {
      const jobData: any = await API.graphql({query: listJobs, variables: {filter: filter}})
      console.log(jobData)
      const jobArr = jobData.data.listJobs.items
      dispatch(setJobs(jobArr))
    } catch (err) {
      console.log('error fetching jobs: ', err)
    }
  }

  return (
    <Container className={"page-content"}>
      <h1>Job Board</h1>
      <Row>
        <JobBoardItem jobType={"Therapy"}/>
        <JobBoardItem jobType={"Emotional Support"}/>
        <JobBoardItem jobType={"Fishing"}/>
        <JobBoardItem jobType={"Foraging"}/>
      </Row>
      <PetGallery stats={false} selectable={true} max={MAX_SELECTED}/>
    </Container>
  );
}

export default Services;
