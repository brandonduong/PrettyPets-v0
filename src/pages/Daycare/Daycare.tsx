import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useAppSelector} from "../../app/hooks";
import {Card} from "antd";
import '../../styles/Daycare/index.css'

function Daycare() {
  const inventory = useAppSelector((state) => state.inventory)

  return (
    <Container className={"page-content"}>
      <Card>
          <Row>
            <Col>
              {inventory.starDust.uglyStarDust} Ugly Star Dust
            </Col>
            <Col>
              {inventory.starDust.poorStarDust} Poor Star Dust
            </Col>
            <Col>
              {inventory.starDust.fineStarDust} Fine Star Dust
            </Col>
            <Col>
              {inventory.starDust.cuteStarDust} Cute Star Dust
            </Col>
            <Col>
              {inventory.starDust.prettyStarDust} Pretty Star Dust
            </Col>
          </Row>
      </Card>
    </Container>
  );
}

export default Daycare;
