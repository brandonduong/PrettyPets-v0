import React, {useEffect} from "react";
import {useAuthenticator} from '@aws-amplify/ui-react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Link} from "react-router-dom";
import {API} from "aws-amplify";
import {listJobs, listPrettyPets, listUsers} from "../../graphql/queries";
import {incrementByAmount, setUserId} from "../../features/prettypoints/prettyPointsSlice";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {logout} from '../../features/prettypoints/prettyPointsSlice'
import '../../styles/NavMap/index.css'
import {setPrettyPets} from "../../features/prettypets/prettyPetsSlice";
import {setJobs} from "../../features/jobs/jobsSlice";

function NavMap() {
  const {user, signOut} = useAuthenticator((context) => [context.user]);
  const prettyPoints = useAppSelector((state) => state.prettyPoints.value)
  const userId = useAppSelector((state) => state.prettyPoints.userId)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (prettyPoints < 0) {
      fetchUser(user.username!)
      fetchPets()
      fetchJobs()
    }
  }, [])

  function signout() {
    dispatch(logout())
    signOut()
  }

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

  async function fetchUser(username: string) {
    const filter = {
      email: {
        eq: username
      }
    }
    try {
      const userData: any = await API.graphql({query: listUsers, variables: {filter: filter}})
      console.log(userData)
      dispatch(incrementByAmount(userData.data.listUsers.items[0].prettyPoints))
      dispatch(setUserId(userData.data.listUsers.items[0].id))
    } catch (err) {
      console.log('error fetching user data: ', err)
    }
  }

  async function fetchJobs() {
    const filter = {
      owner: {
        eq: user.username
      },
      complete: {
        eq: false
      }
    }
    try {
      const jobData: any = await API.graphql({query: listJobs, variables: {filter: filter}})
      console.log(jobData)
      const jobArr = jobData.data.listJobs.items
      dispatch(setJobs(jobArr))
    } catch (err) {
      console.log('error fetching jobs: ', err)
    }
  }

  return (
    <Navbar sticky={"top"} bg="light" expand="lg">
      <Container className={'pretty-logo'}>
        <Navbar.Brand><Link to={'/'}>PrettyPets</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to={`/`} className={"nav-link"}>Home</Link>
            <Link to={'/Adoption/'} className={"nav-link"}>Adoption Centre</Link>
            <Link to={'/Job/'} className={"nav-link"}>Job Board</Link>
            <Link to={'/Accessory/'} className={"nav-link"}>Accessory Store</Link>
            <Link to={'/Daycare/'} className={"nav-link"}>Daycare</Link>
            <Link to={'/Groomer/'} className={"nav-link"}>Groomer</Link>
            <Link to={'/Fashion/'} className={"nav-link"}>Fashion Show</Link>
          </Nav>
          <Nav className="ms-auto">
            <Navbar.Text>PrettyPoints: {prettyPoints}</Navbar.Text>
            <NavDropdown align="end" title={user.attributes!.preferred_username} className="profile-nav-dropdown">
              <div className={"dropdown-item"}><Link to={`/profile/${userId}/`} className={"nav-link"}>Profile</Link></div>
              <NavDropdown.Divider/>
              <div className={"dropdown-item"} onClick={signout}><a>Sign Out</a></div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMap;
