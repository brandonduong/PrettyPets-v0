import React from "react";
import PetGallery from "../../components/Home/PetGallery";
import '../../styles/Home/index.css'
import {Container} from "react-bootstrap";

function Home() {

  return (
    <Container className={"page-content"}>
      <PetGallery selectable={false} stats={true} max={0}/>
    </Container>
  );
}

export default Home;
