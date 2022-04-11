import React, {useState} from "react";
import '../../styles/Home/index.css'
import '../../styles/Services/index.css'
import {Container, Row} from "react-bootstrap";
import PetGallery from "../../components/Home/PetGallery";
import JobBoardItem from "../../components/Services/JobBoardItem";

const MAX_SELECTED = 6

function Services() {
  const [length, setLength] = useState(0)

  return (
    <Container className={"page-content"}>
      <h1>Job Board</h1>
      <Row>
        <JobBoardItem jobType={"Therapy"} length={length} setLength={setLength}/>
        <JobBoardItem jobType={"Emotional Support"} length={length} setLength={setLength}/>
        <JobBoardItem jobType={"Foraging"} length={length} setLength={setLength}/>
        <JobBoardItem jobType={"Fishing"} length={length} setLength={setLength}/>
      </Row>
      <PetGallery stats={false} selectable={true} max={MAX_SELECTED}/>
    </Container>
  );
}

export default Services;
