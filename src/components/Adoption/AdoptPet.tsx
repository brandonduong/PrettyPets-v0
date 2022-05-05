import React, {useEffect, useState} from "react";
import {API} from "aws-amplify";
import {useAuthenticator} from '@aws-amplify/ui-react';
import {rollPet} from "../../graphql/mutations";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {incrementByAmount} from "../../features/prettypoints/prettyPointsSlice";
import {Button, Modal, Spin, Tooltip} from "antd";
import {setPrettyPets} from "../../features/prettypets/prettyPetsSlice";
import {PrettyPet} from "../../API";
import PetCard from "../Home/PetCard";

const ROLL_PRICE = 100;

interface props {
  baseColour: string,
  secondColour: string,
  thirdColour: string,
  paperColour: string,
  currency: string
}

function AdoptPet({baseColour, secondColour, thirdColour, paperColour, currency}: props) {
  const {user} = useAuthenticator((context) => [context.user]);
  const prettyPoints = useAppSelector((state) => state.prettyPoints.value)
  const prettyPets = useAppSelector((state) => state.prettyPets.value)
  const dispatch = useAppDispatch()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const [rolledPet, setRolledPet] = useState<PrettyPet>()

  const handleOk = () => {
    setIsModalVisible(false);
    setButtonDisabled(false)
    setRolledPet(undefined)
  };

  useEffect(() => {
    let loop: NodeJS.Timeout
    if (loading) {
      loop = setTimeout(() => {
        setLoading(false);
      }, 2000)
    }
    return () => {
      clearInterval(loop)
    }
  }, [loading])

  async function rollPetOnClick(userId: string | undefined) {
    // Temp disabled (blocked due to FashionFame not done yet)
    if (currency === 'FashionFame') return

    if (!userId || prettyPoints < ROLL_PRICE || buttonDisabled) return
    try {
      setButtonDisabled(true)
      setIsModalVisible(true)

      // Handle loading
      setLoading(true)

      const petData: any = await API.graphql({query: rollPet, variables: {userId}})
      console.log('rolled: ', petData.data.rollPet)
      setRolledPet(petData.data.rollPet)
      dispatch(incrementByAmount(-ROLL_PRICE))
      dispatch(setPrettyPets([...prettyPets, petData.data.rollPet]))
    } catch (err) {
      console.log('error rolling for pet:', err)
    }
  }

  return (
    <div className="roll-btn">
      <div>
        <div className="letter-image">
          <div className="animated-mail" onClick={() => rollPetOnClick(user.attributes!.sub)}>
            <div className="back-fold" style={{background: baseColour}}/>
            <Tooltip title={`Adopt pet for 100 ${currency}`}>
              <div className="letter">
                <div className="letter-border" style={{background: `repeating-linear-gradient(-45deg, ${paperColour}, ${paperColour} 8px, transparent 8px, transparent 18px)`}}/>
                <div className="letter-title" style={{background: paperColour}}/>
                <div className="letter-context" style={{background: paperColour}}/>
                <div className="letter-stamp" style={{background: paperColour}}>
                  <div className="letter-stamp-inner"/>
                </div>
              </div>
              <div className="top-fold" style={{borderColor: `${baseColour} transparent transparent transparent`}}/>
              <div className="body" style={{borderColor: `transparent transparent ${secondColour} transparent`}}/>
              <div className="left-fold" style={{borderColor: `transparent transparent transparent ${thirdColour}`}}/>
            </Tooltip>
          </div>
        </div>
      </div>
      <Modal className="adoption-form"
             title={<h3 className="adoption-form-title">Adoption Form</h3>}
             visible={isModalVisible}
             onOk={handleOk}
             closable={false}
             footer={null}>
        <div className={"adoption-form-content"}>
          {rolledPet && !loading ?
            <PetCard pet={rolledPet} selectable={false} stats={true} max={0}/> :
            <Spin tip="Finalizing adoption..." size="large"/>
          }
        </div>
        <Button type={"primary"} onClick={handleOk}>Welcome home!</Button>

      </Modal>
    </div>
  );
}

export default AdoptPet;
