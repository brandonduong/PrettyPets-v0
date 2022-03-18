import React, {CSSProperties} from "react";
import {useAuthenticator} from '@aws-amplify/ui-react';
import AdoptPet from "../../components/Adoption/AdoptPet";
import {useAppSelector} from "../../app/hooks";

function Adoption() {
  const {user} = useAuthenticator((context) => [context.user]);
  const prettyPoints = useAppSelector((state) => state.prettyPoints.value)

  return (
    <div style={container}>
      <h1>Hello {user.attributes!.preferred_username} ({user.username})</h1>
      <h3>PrettyPoints: {prettyPoints}</h3>
      <AdoptPet />
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

export default Adoption;
