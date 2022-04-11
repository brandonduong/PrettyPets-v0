import React, {useEffect, useState} from "react";
import PetGallery from "../../components/Home/PetGallery";
import '../../styles/Home/index.css'
import {Container} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";
import {API} from "aws-amplify";
import {listUsers} from "../../graphql/queries";
import {useAuthenticator} from "@aws-amplify/ui-react";
import '../../styles/Profile/index.css'

function Profile() {
  const {profileId} = useParams()
  const userId = useAppSelector((state) => state.prettyPoints.userId)
  const [profileUser, setProfileUser] = useState<string>()
  const {user} = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (userId !== profileId) {
      fetchProfileUser()
    } else {
      setProfileUser(user.username)
    }
  }, [profileId])

  async function fetchProfileUser() {
    const filter = {
      id: {
        eq: profileId
      }
    }
    try {
      const userData: any = await API.graphql({query: listUsers, variables: {filter: filter}})
      console.log(userData)
      setProfileUser(userData.data.listUsers.items[0].email)
    } catch (err) {
      console.log('error fetching user data: ', err)
    }
  }

  return (
    <Container className={"page-content"}>
      <PetGallery selectable={false} stats={true} max={0} profileUser={profileUser} profileId={profileId}/>
    </Container>
  );
}

export default Profile;
