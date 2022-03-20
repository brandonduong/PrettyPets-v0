import React, {CSSProperties} from "react";
import AdoptPet from "../../components/Adoption/AdoptPet";

function Adoption() {
  return (
    <div style={container}>
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
