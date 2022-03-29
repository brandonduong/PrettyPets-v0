import React, {useEffect, useState} from "react";
import '../../styles/Home/index.css'
import '../../styles/Services/index.css'
import {Container, Row} from "react-bootstrap";
import PetGallery from "../../components/Home/PetGallery";
import JobBoardItem from "../../components/Services/JobBoardItem";

const MAX_SELECTED = 6

function Services() {

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
