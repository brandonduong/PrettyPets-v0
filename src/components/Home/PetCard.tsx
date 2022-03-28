import React, {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import StarDisplay from "../Adoption/StarDisplay";
import Star from "../../assets/icons/Star";
import {PrettyPet, PetStats} from "../../API";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectPrettyPet} from "../../features/prettypets/prettyPetsSlice";
import {Popover} from "antd";

interface PetCardData {
  pet: PrettyPet
  selectable: boolean
  stats: boolean
  max: number
}

function PetCard(props: PetCardData) {
  const petIds = useAppSelector((state) => state.prettyPets.selected)
  const [selected, setSelected] = useState(petIds.includes(props.pet.id))
  const dispatch = useAppDispatch()

  useEffect(() => {
    setSelected(petIds.includes(props.pet.id))
  }, [petIds])

  function handleOnClick() {
    if (props.selectable) {
      if (!selected && petIds.length < props.max) {
        setSelected(true)
      } else {
        setSelected(false)
      }
      dispatch(selectPrettyPet(props.pet.id))
    }
  }

  const stats = <Row>
    <Col style={{textAlign: "end"}}>
      <span className={"col-title"}>Traits:</span>
      {props.pet.traits[0]!.map((trait, index) => (
        <div key={trait + index.toString()} className={"good-trait"}>
          {trait}
        </div>
      ))}
      {props.pet.traits[1]!.map((trait, index) => (
        <div key={trait + index.toString()} className={"bad-trait"}>
          {trait}
        </div>
      ))}
    </Col>
    <Col style={{textAlign: "start"}}>
      <span className={"col-title"}>Stats:</span>
      {Object.keys(props.pet.stats!).map((key, index) => (
        <div key={key + index.toString()}>
          {key}: {props.pet.stats![key as keyof PetStats]}
        </div>
      ))}
    </Col>
  </Row>

  const body =
    <Card.Body className={"pet-card-body"}>
    <Card.Title>
      {props.pet.nickname}</Card.Title>
    <StarDisplay stars={props.pet.star}/>
    {
      props.stats && stats
    }
  </Card.Body>

  return (
    <Card className={"pet-card " + (selected ? 'selected-card' : '')} onClick={handleOnClick}>
      <div className={"pet-card-img"}>
        <Star/>
      </div>
      {props.stats ? body

        : <Popover content={stats}>
          {body}
        </Popover>}
    </Card>
  )
}

export default PetCard;
