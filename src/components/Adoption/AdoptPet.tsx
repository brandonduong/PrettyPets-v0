import React, {CSSProperties, useEffect} from "react";
import {API} from "aws-amplify";
import {useAuthenticator} from '@aws-amplify/ui-react';
import {rollPet} from "../../graphql/mutations";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {incrementByAmount} from "../../features/prettypoints/prettyPointsSlice";

const ROLL_PRICE = 100;

function AdoptPet() {
  const {user} = useAuthenticator((context) => [context.user]);
  const prettyPoints = useAppSelector((state) => state.prettyPoints.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log(user)
  }, [])

  async function rollPetOnClick(email: string | undefined) {
    if (!email || prettyPoints < ROLL_PRICE) return
    try {
      const petData: any = await API.graphql({query: rollPet, variables: {email: email}})
      console.log('rolled: ', petData.data.rollPet)
      dispatch(incrementByAmount(-ROLL_PRICE))
    } catch (err) {
      console.log('error rolling for pet:', err)
    }
  }

  return (
    <div style={container}>
      <button style={styles.button} onClick={() => rollPetOnClick(user.username)}>Adopt Pet</button>
    </div>
  );
}

const styles = {
  button: {backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px'},
}

const container: CSSProperties = {
  width: '50%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 20
}

export default AdoptPet;
