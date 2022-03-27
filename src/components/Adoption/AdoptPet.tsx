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

function AdoptPet() {
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

  async function rollPetOnClick(email: string | undefined) {
    if (!email || prettyPoints < ROLL_PRICE || buttonDisabled) return
    try {
      setButtonDisabled(true)
      setIsModalVisible(true)

      // Handle loading
      setLoading(true)

      const petData: any = await API.graphql({query: rollPet, variables: {email: email}})
      console.log('rolled: ', petData.data.rollPet)
      setRolledPet(petData.data.rollPet)
      dispatch(incrementByAmount(-ROLL_PRICE))
      dispatch(setPrettyPets([...prettyPets, petData.data.rollPet]))
    } catch (err) {
      console.log('error rolling for pet:', err)
    }
  }

  return (
    <>
      <div onClick={() => rollPetOnClick(user.username)}>
        <div className="letter-image">
          <div className="animated-mail">
            <div className="back-fold"/>
            <Tooltip title="Adopt pet for 100 PrettyPoints">
              <div className="letter">
                <div className="letter-border"/>
                <div className="letter-title"/>
                <div className="letter-context"/>
                <div className="letter-stamp">
                  <div className="letter-stamp-inner"/>
                </div>
              </div>
              <div className="top-fold"/>
              <div className="body"/>
              <div className="left-fold"/>
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
    </>
  );
}

export default AdoptPet;
