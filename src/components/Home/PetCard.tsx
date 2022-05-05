import React, {useEffect, useState} from "react";
import {Card, Col, Row} from "react-bootstrap";
import StarDisplay from "../Adoption/StarDisplay";
import Star from "../../assets/icons/Star";
import {PrettyPet, PetStats} from "../../API";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectPrettyPet} from "../../features/prettypets/prettyPetsSlice";
import {Badge, Popover} from "antd";

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
    if (props.selectable && (props.pet.status === 'free' || props.pet.status === null)) {
      if (!selected && petIds.length < props.max) {
        setSelected(true)
      } else {
        setSelected(false)
      }
      dispatch(selectPrettyPet({id: props.pet.id, max: props.max}))
    }
  }

  const stats = <Row className={props.stats ? "" : "stat-popover"}>
    <Col className={props.stats ? "" : "trait-col"} style={{textAlign: "end"}}>
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
    <Col className={props.stats ? "" : "stat-col"} style={{textAlign: "start"}}>
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
      <Badge
        count={props.pet.status}
        className={"pet-card-status"}
        style={{ backgroundColor: props.pet.status === 'free' ? '#52c41a':'#FF5E5EFF' }}
      />
      {
        props.stats && stats
      }
    </Card.Body>

  return (
    <Card className={"pet-card " + (selected && props.selectable ? 'selected-card' : '')} onClick={handleOnClick}>
      <div className={"pet-card-img"}>
        <Star/>
      </div>
      {props.stats ? body
        : <Popover content={stats}>
          {body}
        </Popover>
      }
    </Card>
  )
}

export default PetCard;
