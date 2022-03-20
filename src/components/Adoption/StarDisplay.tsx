import React from "react";
import Star from "../../assets/icons/Star";
import {Container} from "react-bootstrap";

interface Stars {
  stars: number
}

function StarDisplay(props : Stars) {

  return (
    <Container className={'star'}>
      {
        Array.from(Array(props.stars).keys()).map((num) => (
          <Star key={'star-'+num}/>
        ))
      }
    </Container>
  );
}

export default StarDisplay;
