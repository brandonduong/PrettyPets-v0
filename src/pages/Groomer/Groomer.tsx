import React from "react";
import {Container} from "react-bootstrap";
import {useAppSelector} from "../../app/hooks";
import {Card} from "antd";
import '../../styles/Groomer/index.css'

function Groomer() {
  const inventory = useAppSelector((state) => state.inventory)

  return (
    <Container className={"page-content"}>
      <Card>
          {inventory.rainbowDye} Rainbow Dye
      </Card>
    </Container>
  );
}

export default Groomer;
