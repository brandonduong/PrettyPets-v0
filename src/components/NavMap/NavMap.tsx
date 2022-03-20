import React, {useEffect} from "react";
import {useAuthenticator} from '@aws-amplify/ui-react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Link} from "react-router-dom";
import {API} from "aws-amplify";
import {listUsers} from "../../graphql/queries";
import {incrementByAmount} from "../../features/prettypoints/prettyPointsSlice";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import '../../styles/NavMap/index.css'

function NavMap() {
  const {user, signOut} = useAuthenticator((context) => [context.user]);
  const prettyPoints = useAppSelector((state) => state.prettyPoints.value)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (prettyPoints < 0) {
      fetchUser(user.username!)
    }
  })

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
    } catch (err) {
      console.log('error fetching user data: ', err)
    }
  }

  return (
    <Navbar sticky={"top"} bg="light" expand="lg">
      <Container className={'pretty-logo'}>
        <Navbar.Brand><Link to={'/'}>PrettyPets</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Navbar.Text>PrettyPoints: {prettyPoints}</Navbar.Text>
            <NavDropdown align="end" title={user.attributes!.preferred_username} className="profile-nav-dropdown">
              <NavDropdown.Item><Link to={'/'} className={"nav-link"}>Home</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={'/Adoption'} className={"nav-link"}>Adoption Centre</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={'/Accessory'} className={"nav-link"}>Accessory Store</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={'/Services'} className={"nav-link"}>Services</Link></NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item onClick={signOut}><a>Sign Out</a></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMap;
