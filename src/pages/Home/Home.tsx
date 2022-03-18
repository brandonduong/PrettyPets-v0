import React, {CSSProperties, useEffect} from "react";
import {useAuthenticator} from '@aws-amplify/ui-react';
import PetGallery from "../../components/Home/PetGallery";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Link} from "react-router-dom";
import {API} from "aws-amplify";
import {listUsers} from "../../graphql/queries";
import {incrementByAmount} from "../../features/prettypoints/prettyPointsSlice";

function Home() {
  const {user, signOut} = useAuthenticator((context) => [context.user]);
  const prettyPoints = useAppSelector((state) => state.prettyPoints.value)
  const dispatch = useAppDispatch()

  useEffect(()=> {
    if (prettyPoints < 0) {
      fetchUser(user.username!)
    }
  })

  async function fetchUser(username : string) {
    const filter = {
      email: {
        eq: username
      }
    }
    try {
      const userData: any = await API.graphql({query: listUsers, variables: { filter: filter }})
      console.log(userData)
      dispatch(incrementByAmount(userData.data.listUsers.items[0].prettyPoints))
    } catch (err) {
      console.log('error fetching user data: ', err)
    }
  }

  return (
    <div style={container}>
      <h1>Hello {user.attributes!.preferred_username} ({user.username})</h1>
      <h3>PrettyPoints: {prettyPoints}</h3>
      <button onClick={signOut}>Sign out</button>
      <Link to={'/Adoption'}>Adoption Centre</Link>
      <PetGallery/>
    </div>
  );
}

const container: CSSProperties = {
  width: '50%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 20
}

export default Home;
