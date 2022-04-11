import React, {useEffect, useLayoutEffect, useState} from "react";
import {API} from "aws-amplify";
import {useAuthenticator, Collection} from '@aws-amplify/ui-react';
import {listPrettyPets} from "../../graphql/queries";
import {Col, Row} from "react-bootstrap";
import PetCard from "./PetCard";
import {useAppSelector} from "../../app/hooks";
import {PrettyPet} from "../../API";
import {Button, Popover} from "antd";
import {CopyOutlined, FilterOutlined} from "@ant-design/icons";
import Filters from "./Filters";

interface Props {
  selectable: boolean
  stats: boolean
  max: number
  profileUser?: string
  profileId?: string
}

interface Filter {
  star?: string,
  createdAt?: string,
  cool?: string,
  cute?: string,
  confidence?: string,
  control?: string
}

function PetGallery(props: Props) {
  const {user} = useAuthenticator((context) => [context.user]);
  const pets = useAppSelector((state) => state.prettyPets.value)
  const petIds = useAppSelector((state) => state.prettyPets.selected)
  const [width, setWidth] = useState(0);
  const [strangerPets, setStrangerPets] = useState<Array<PrettyPet>>()

  // Filters
  const [filterModalVisible, setFilterModalVisible] = useState(false)
  const [filters, setFilters] = useState<Filter>({
    star: 'dec',
  })

  function getItemsPerPage() {
    // https://stackoverflow.com/a/8876069
    if (width <= 576) return 2
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

  function applyFilters(petsList: Array<PrettyPet>) {
    const copy = [...petsList]

    for (const field in filters) {
      if (field === 'star') {
        switch (Object(filters)[field]) {
          case 'dec':
            copy.sort((a, b) => {
              return Object(b)[field] - Object(a)[field]
            })
            break;

          case 'inc':
            copy.sort((a, b) => {
              return Object(a)[field] - Object(b)[field]
            })
            break;

          default:
            break;
        }
      } else if (field === 'createdAt') {
        switch (Object(filters)[field]) {
          case 'dec':
            copy.sort((a, b) => {
              return new Date(new Date(Object(b)[field])).getTime() - new Date(new Date(Object(a)[field])).getTime()
            })
            break;

          case 'inc':
            copy.sort((a, b) => {
              return new Date(new Date(Object(a)[field])).getTime() - new Date(new Date(Object(b)[field])).getTime()
            })
            break;

          default:
            break;
        }
      } else {
        switch (Object(filters)[field]) {
          case 'dec':
            copy.sort((a, b) => {
              return Object(b).stats[field] - Object(a).stats[field]
            })
            break;

          case 'inc':
            copy.sort((a, b) => {
              return Object(a).stats[field] - Object(b).stats[field]
            })
            break;

          default:
            break;
        }
      }
    }
    return copy
  }

  function shareProfile() {
    const getUrl = window.location;
    const baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    navigator.clipboard.writeText(`${baseUrl}/${props.profileId}`);
  }

  function handleVisibleChange(visible: boolean) {
    setFilterModalVisible(visible)
  }

  function searchFilter(pet: any, keyword:string){
    return pet.nickname.includes(keyword) || pet.nickname.includes(keyword.charAt(0).toUpperCase() + keyword.slice(1))
  }

  return (
    <>
      {props.selectable &&
      <h5 className={"selected-counter"}>{petIds.length}/{props.max} selected</h5>
      }
      <Row>
        <Col className={"filter-col"}>
          <Popover
            content={<Filters filters={filters} setFilters={setFilters}/>}
            title={<span className={"filter-title"}>Filters</span>}
            trigger="click"
            visible={filterModalVisible}
            onVisibleChange={handleVisibleChange}
            placement={"bottomLeft"}
          >
            <Button type={"primary"} icon={<FilterOutlined/>} size={"large"}/>
          </Popover>
        </Col>
        {
          props.profileUser &&
          <Col className={"share-div"}>
            <Button className={"share-button"} type={"primary"} icon={<CopyOutlined/>} size={"large"}
                    onClick={shareProfile}/>
          </Col>
        }
      </Row>
      <Collection
        type="list"
        direction="row"
        itemsPerPage={getItemsPerPage()}
        isPaginated
        gap="0"
        isSearchable
        wrap="wrap"
        searchFilter={searchFilter}
        searchPlaceholder="Type to search..." items={strangerPets ? strangerPets : applyFilters(pets)}>
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
