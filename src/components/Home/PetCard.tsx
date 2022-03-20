import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import StarDisplay from "../Adoption/StarDisplay";
import {Pet, PetStats} from "../../types/custom";
import Star from "../../assets/icons/Star";

interface PetCardData {
  pet: Pet
}

function PetCard(props: PetCardData) {

  return (
    <Card className={"pet-card"}>
      <div className={"pet-card-img"}>
        <Star/>
      </div>
      <Card.Body className={"pet-card-body"}>
        <Card.Title>
          {props.pet.nickname}</Card.Title>
        <StarDisplay stars={props.pet.star}/>
        <Row>
          <Col style={{textAlign: "end"}}>
                <span className={"col-title"}>Traits:</span>
            {props.pet.traits[0].map((trait, index) => (
              <div key={trait + index.toString()} className={"good-trait"}>
                {trait}
              </div>
            ))}
            {props.pet.traits[1].map((trait, index) => (
              <div key={trait + index.toString()} className={"bad-trait"}>
                {trait}
              </div>
            ))}
          </Col>
          <Col style={{textAlign: "start"}}>
            <span className={"col-title"}>Stats:</span>
            {Object.keys(props.pet.stats).map((key, index) => (
              <div key={key + index.toString()}>
                {key}: {props.pet.stats[key as keyof PetStats]}
              </div>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default PetCard;
