import React, {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {useAuthenticator} from '@aws-amplify/ui-react';
import {listWhy4s} from "../../graphql/queries";
import {Col, Container, Row} from "react-bootstrap";
import PetCard from "./PetCard";
import {Pet} from "../../types/custom";

function PetGallery() {
  const [pets, setPets] = useState<Array<Pet>>([])
  const {user} = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    console.log(user)
    fetchPets()
  }, [])

  async function fetchPets() {
    const filter = {
      owner: {
        eq: user.username
      }
    }
    try {
      const petData: any = await API.graphql({query: listWhy4s, variables: {filter: filter}})
      console.log(petData)
      const petArr = petData.data.listWhy4s.items
      setPets(petArr)
    } catch (err) {
      console.log('error fetching pets: ', err)
    }
  }

  return (
    <Container className={"pet-gallery"}>
      <Row>
        {
          pets.map((pet, index) => (
            <Col xs={"12"} sm={"6"} md={"6"} lg={"4"} xl={"3"} key={pet.id ? pet.id : index} className={"pet-card-col"}>
              <PetCard pet={pet} key={pet + index.toString()}/>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
}

export default PetGallery;
