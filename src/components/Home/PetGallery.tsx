import React, {useEffect, useLayoutEffect, useState} from "react";
import {API} from "aws-amplify";
import {useAuthenticator, Collection} from '@aws-amplify/ui-react';
import {listPrettyPets} from "../../graphql/queries";
import {Col} from "react-bootstrap";
import PetCard from "./PetCard";
import {useAppSelector} from "../../app/hooks";
import {PrettyPet} from "../../API";

interface Props {
  selectable: boolean
  stats: boolean
  max: number
  profileUser?: string
}

function PetGallery(props: Props) {
  const {user} = useAuthenticator((context) => [context.user]);
  const pets = useAppSelector((state) => state.prettyPets.value)
  const petIds = useAppSelector((state) => state.prettyPets.selected)
  const [width, setWidth] = useState(0);
  const [strangerPets, setStrangerPets] = useState<Array<PrettyPet>>()

  function getItemsPerPage() {
    // https://stackoverflow.com/a/8876069
    if (width <= 576) return 1
    if (width <= 768) return 4
    if (width <= 992) return 4
    if (width <= 1200) return 6
    return 8
  }

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      ));
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (props.profileUser) {
      console.log(props.profileUser, user.username)
      if (props.profileUser === user.username) {
        setStrangerPets(undefined)
      } else {
        fetchStrangerPets()
      }
    }
  }, [props.profileUser])

  async function fetchStrangerPets() {
    const filter = {
      owner: {
        eq: props.profileUser
      }
    }
    try {
      const petData: any = await API.graphql({query: listPrettyPets, variables: {filter: filter}})
      console.log(petData)
      const petArr = petData.data.listPrettyPets.items
      setStrangerPets(petArr)
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
        itemsPerPage={getItemsPerPage()}
        isPaginated
        gap="0"
        isSearchable
        wrap="wrap"
        searchPlaceholder="Type to search..." items={strangerPets ? strangerPets : pets}>
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
