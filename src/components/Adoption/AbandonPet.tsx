import {Button, List, Modal} from "antd";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {PrettyPet} from "../../API";
import {RAINBOW_DYE_PAYOUT} from "../../constants/Abandon";
import {API} from "aws-amplify";
import {abandonPet, assignJob} from "../../graphql/mutations";
import {setPrettyPets, setSelectedPrettyPets} from "../../features/prettypets/prettyPetsSlice";
import {setInventory} from "../../features/inventory/inventorySlice";

const DEFAULT_PAYOUT = {
  rainbowDye: 0,
  starDust: {
    uglyStarDust: 0,
    poorStarDust: 0,
    fineStarDust: 0,
    cuteStarDust: 0,
    prettyStarDust: 0
  }
}

function AbandonPet() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const pets = useAppSelector((state) => state.prettyPets.value)
  const petIds = useAppSelector((state) => state.prettyPets.selected)
  const [petsInfo, setPetsInfo] = useState<Array<PrettyPet>>([])
  const [payout, setPayout] = useState(DEFAULT_PAYOUT)
  const dispatch = useAppDispatch()
  const prettyPets = useAppSelector((state) => state.prettyPets.value)
  const inventory = useAppSelector((state) => state.inventory)

  const handleOk = async () => {
    setIsModalVisible(false);
    const abandoned: any = await API.graphql({
      query: abandonPet,
      variables: {petIds: petIds}
    })
    const newInventory:any = {
      rainbowDye: payout.rainbowDye + inventory.rainbowDye,
      starDust: {
        uglyStarDust: payout.starDust.uglyStarDust + inventory.starDust.uglyStarDust,
        poorStarDust: payout.starDust.poorStarDust + inventory.starDust.poorStarDust,
        fineStarDust: payout.starDust.fineStarDust + inventory.starDust.fineStarDust,
        cuteStarDust: payout.starDust.cuteStarDust + inventory.starDust.cuteStarDust,
        prettyStarDust: payout.starDust.prettyStarDust + inventory.starDust.prettyStarDust
      }
    }
    console.log(newInventory)
    dispatch(setInventory(newInventory))
    const copy = [...prettyPets]
    dispatch(setPrettyPets(copy.filter(p => !petIds.includes(p.id))))
    dispatch(setSelectedPrettyPets([]))
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  useEffect(() => {
    const newInfo: Array<PrettyPet> = []
    petIds.forEach((pet) => {
        newInfo.push(
          pets.filter(p => {
            return p.id === pet
          })[0])
      }
    )
    setPetsInfo(newInfo)

    // Calculate payout
    let newPayout = DEFAULT_PAYOUT
    newInfo.forEach((pet) => {
      const stats = pet.stats
      const statTotal = stats!.cool + stats!.cute + stats!.confidence + stats!.control

      // Rainbow dye payout
      newPayout = {...newPayout, rainbowDye: newPayout.rainbowDye + RAINBOW_DYE_PAYOUT[pet.star - 1]}

      // Stardust payout
      switch (pet.star) {
        case 1:
          newPayout = {...newPayout, starDust: {...newPayout.starDust, uglyStarDust: newPayout.starDust.uglyStarDust + statTotal}}
          return
        case 2:
          newPayout = {...newPayout, starDust: {...newPayout.starDust, poorStarDust: newPayout.starDust.poorStarDust + statTotal}}
          return
        case 3:
          newPayout = {...newPayout, starDust: {...newPayout.starDust, fineStarDust: newPayout.starDust.fineStarDust + statTotal}}
          return
        case 4:
          newPayout = {...newPayout, starDust: {...newPayout.starDust, cuteStarDust: newPayout.starDust.cuteStarDust + statTotal}}
          return
        case 5:
          newPayout = {...newPayout, starDust: {...newPayout.starDust, prettyStarDust: newPayout.starDust.prettyStarDust + statTotal}}
          return
      }
    })
    setPayout(newPayout)
  }, [petIds])

  return (
    <>
      <Modal className="adoption-form"
             title={<h3 className="adoption-form-title">Abandon</h3>}
             visible={isModalVisible}
             onOk={handleOk}
             closable={false}
             footer={null}>
        <List
          itemLayout="horizontal"
          dataSource={petsInfo}
          renderItem={(item: PrettyPet) => (
            <List.Item>
              <List.Item.Meta
                title={
                  ` ${item.star} Star - ${item.nickname}`
                }
                description={`${item.stats?.cool} Cool | ${item.stats?.cute} Cute | ${item.stats?.confidence} Confidence |  ${item.stats?.control} Control`}
              />
            </List.Item>
          )}
        />
        <hr/>
        <List.Item>
          <List.Item.Meta
            title={
              <>
                <div>{`${payout.rainbowDye} Rainbow Dye`}</div>
                <div>{`${payout.starDust.uglyStarDust} Ugly Stardust | ${payout.starDust.poorStarDust} Poor Stardust`}</div>
                <div>{`${payout.starDust.fineStarDust} Fine Stardust | ${payout.starDust.cuteStarDust} Cute Stardust | ${payout.starDust.prettyStarDust} Pretty Stardust`}</div>
              </>
            }
          />
        </List.Item>

        <div className={"custom-modal-footer"}>
          <Button type={"default"} className={"cancel-abandon"} onClick={handleCancel} block>Cancel</Button>
          <Button type={"primary"} onClick={handleOk} block>Confirm</Button>
        </div>
      </Modal>
      <Button type={"primary"} onClick={() => {
        setIsModalVisible(true)
      }} block>Abandon</Button>
    </>
  )
}

export default AbandonPet
