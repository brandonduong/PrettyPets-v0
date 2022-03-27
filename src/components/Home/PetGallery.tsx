import React, {useEffect} from "react";
import {API} from "aws-amplify";
import {useAuthenticator, Collection} from '@aws-amplify/ui-react';
import {listPrettyPets} from "../../graphql/queries";
import {Col} from "react-bootstrap";
import PetCard from "./PetCard";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setPrettyPets} from "../../features/prettypets/prettyPetsSlice";

interface Props {
  selectable: boolean
  stats: boolean
  max: number
}

function PetGallery(props: Props) {
  const {user} = useAuthenticator((context) => [context.user]);
  const petsFetched = useAppSelector((state) => state.prettyPets.fetched)
  const dispatch = useAppDispatch()
  const pets = useAppSelector((state) => state.prettyPets.value)
  const petIds = useAppSelector((state) => state.prettyPets.selected)

  useEffect(() => {
    if (!petsFetched) {
      fetchPets()
    }
  }, [])

  async function fetchPets() {
    const filter = {
      owner: {
        eq: user.username
      }
    }
    try {
      const petData: any = await API.graphql({query: listPrettyPets, variables: {filter: filter}})
      console.log(petData)
      const petArr = petData.data.listPrettyPets.items
      dispatch(setPrettyPets(petArr))
    } catch (err) {
      console.log('error fetching pets: ', err)
    }
  }

  return (
    <>
      {props.selectable &&
      <h5 className={"selected-counter"}>{petIds.length}/{props.max} selected</h5>
      }
      <Collection
        type="list"
        direction="row"
        itemsPerPage={12}
        isPaginated
        gap="0"
        isSearchable
        wrap="wrap"
        searchPlaceholder="Type to search..." items={pets}>
        {
          (item, index) => (
            <Col xs={"12"} sm={"6"} md={"6"} lg={"4"} xl={"3"} key={item.id ? item.id : index}
                 className={"pet-card-col"}>
              <PetCard key={item.id} selectable={props.selectable} stats={props.stats}
                       max={props.max} pet={item}/>
            </Col>
          )
        }
      </Collection>
    </>
  );
}

export default PetGallery;
