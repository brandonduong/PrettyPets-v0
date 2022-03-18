import React, {CSSProperties, useEffect, useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {useAuthenticator} from '@aws-amplify/ui-react';
import {listWhy4s} from "../../graphql/queries";

interface Pet {
  animal: string,
  nickname: string,
  color: string,
  colorHex: string,
  owner: string,
  shiny: boolean,
  traits: [string],
  star: number,
  id: string,
}

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
      const petData: any = await API.graphql({query: listWhy4s, variables: { filter: filter }})
      console.log(petData)
      const petArr = petData.data.listWhy4s.items
      setPets(petArr)
    } catch (err) {
      console.log('error fetching pets: ', err)
    }
  }

  return (
    <div style={container}>
      {
        pets.map((pet, index) => (
          <div key={pet.id ? pet.id : index} style={styles.todo}>
            <p style={styles.todoName}>{pet.nickname}</p>
            <p style={styles.todoDescription}>{pet.star} Star, Owner: {pet.owner}, Traits: {pet.traits}, Shiny: {pet.shiny}</p>
          </div>
        ))
      }
    </div>
  );
}

const styles = {
  todoName: {fontSize: 20, fontWeight: 'bold'},
  todoDescription: {marginBottom: 0},
  todo: {marginBottom: 15},
}

const container: CSSProperties = {
  width: '50%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 20
}

export default PetGallery;
