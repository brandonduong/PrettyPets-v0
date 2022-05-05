import React, {useState} from "react";
import AdoptPet from "../../components/Adoption/AdoptPet";
import {Col, Container, Row} from "react-bootstrap";
import '../../styles/Adoption/index.css'
import {Button, Card} from "antd";
import PetGallery from "../../components/Home/PetGallery";
import AbandonPet from "../../components/Adoption/AbandonPet";

const MAX_SELECTED = 15

function Adoption() {
  const [option, setOption] = useState('default')

  return (
    <Container className={"page-content"}>
      {option === 'default' &&
      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} md={6} lg={4}>
          <Card>
            <Button type={"primary"} onClick={() => {
              setOption('adopt')
            }}>
              Adopt
            </Button>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <Card>
            <Button type={"default"} onClick={() => {
              setOption('abandon')
            }}>
              Abandon
            </Button>
          </Card>
        </Col>
      </Row>
      }
      {option !== 'default' &&
      <Row className="justify-content-md-center">
        <Col xs={24} sm={12} md={12} lg={8}>
          <Button type={"primary"} className={"back-button"} onClick={() => {
            setOption('default')
          }} block>Back</Button>
        </Col>
      </Row>}
      {option === 'adopt' &&
      <>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={6} md={6} lg={4}>
            <Card>
              <AdoptPet baseColour={'#cf4a43'} secondColour={'#e95f55'} thirdColour={'#e15349'} paperColour={'#cb5a5e'}
                        currency={'PrettyPoints'}/>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <Card>
              <AdoptPet baseColour={'#435acf'} secondColour={'#556ee9'} thirdColour={'#4967e1'} paperColour={'#5a71cb'}
                        currency={'FashionFame'}/>
            </Card>
          </Col>
        </Row>
      </>
      }
      {option === 'abandon' &&
      <>
        <PetGallery stats={false} selectable={true} max={MAX_SELECTED}/>
        <AbandonPet/>
      </>
      }
    </Container>
  );
}

export default Adoption;
