import React from "react";
import AdoptPet from "../../components/Adoption/AdoptPet";
import {Container} from "react-bootstrap";
import '../../styles/Adoption/index.css'

function Adoption() {
  return (
    <Container className={"page-content"}>
      <AdoptPet />
    </Container>
  );
}

export default Adoption;
