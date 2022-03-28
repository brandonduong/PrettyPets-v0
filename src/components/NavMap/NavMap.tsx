import React, {useEffect} from "react";
import {useAuthenticator} from '@aws-amplify/ui-react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Link} from "react-router-dom";
import {API} from "aws-amplify";
import {listUsers} from "../../graphql/queries";
import {incrementByAmount, setUserId} from "../../features/prettypoints/prettyPointsSlice";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {logout} from '../../features/prettypoints/prettyPointsSlice'
import '../../styles/NavMap/index.css'

function NavMap() {
  const {user, signOut} = useAuthenticator((context) => [context.user]);
  const prettyPoints = useAppSelector((state) => state.prettyPoints.value)
  const userId = useAppSelector((state) => state.prettyPoints.userId)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (prettyPoints < 0) {
      fetchUser(user.username!)
    }
  }, [])

  function signout() {
    dispatch(logout())
    signOut()
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

  return (
    <Navbar sticky={"top"} bg="light" expand="lg">
      <Container className={'pretty-logo'}>
        <Navbar.Brand><Link to={'/'}>PrettyPets</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Navbar.Text>PrettyPoints: {prettyPoints}</Navbar.Text>
            <NavDropdown align="end" title={user.attributes!.preferred_username} className="profile-nav-dropdown">
              <div className={"dropdown-item"}><Link to={`/profile/${userId}/`} className={"nav-link"}>Home</Link></div>
              <div className={"dropdown-item"}><Link to={'/Adoption/'} className={"nav-link"}>Adoption Centre</Link></div>
              <div className={"dropdown-item"}><Link to={'/Accessory/'} className={"nav-link"}>Accessory Store</Link></div>
              <div className={"dropdown-item"}><Link to={'/Job/'} className={"nav-link"}>Job Board</Link></div>
              <div className={"dropdown-item"}><Link to={'/Daycare/'} className={"nav-link"}>Daycare</Link></div>
              <div className={"dropdown-item"}><Link to={'/Groomer/'} className={"nav-link"}>Groomer</Link></div>
              <div className={"dropdown-item"}><Link to={'/Fashion/'} className={"nav-link"}>Fashion Show</Link></div>
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
