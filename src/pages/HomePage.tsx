import React, {CSSProperties, useEffect, useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {listPets} from "../graphql/queries";
import {rollPet} from "../graphql/mutations";
import {useAuthenticator} from '@aws-amplify/ui-react';

interface Pet {
  animal: string,
  nickname: string,
  color: string,
  owner: string,
  shiny: boolean,
  traits: [string],
  star: number,
  id: string,
}

function HomePage() {
  const [pets, setPets] = useState<Array<Pet>>([])
  const {user, signOut} = useAuthenticator((context) => [context.user]);

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
      const petData: any = await API.graphql({query: listPets, variables: { filter: filter }, authMode: 'AMAZON_COGNITO_USER_POOLS'})
      console.log(petData)
      const petArr = petData.data.listPets.items
      setPets(petArr)
    } catch (err) {
      console.log('error fetching pets: ', err)
    }
  }

  async function rollPetOnClick(email: string | undefined) {
    if (!email) return
    try {
      const petData: any = await API.graphql({query: rollPet, variables: {email: email}, authMode: 'AMAZON_COGNITO_USER_POOLS'})
      console.log('rolled: ', petData.data.RollPet)
      setPets([...pets, petData.data.RollPet])
    } catch (err) {
      console.log('error rolling for pet:', err)
    }
  }

  return (
    <div style={container}>
      <h1>Hello {user.attributes!.preferred_username} ({user.username})</h1>
      <button onClick={signOut}>Sign out</button>
      <button style={styles.button} onClick={() => rollPetOnClick(user.username)}>Roll Pet</button>
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
  input: {border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
  todoName: {fontSize: 20, fontWeight: 'bold'},
  todoDescription: {marginBottom: 0},
  button: {backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px'},
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

export default HomePage;
