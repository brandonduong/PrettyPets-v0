import React from 'react';
import './App.css';
import Amplify from 'aws-amplify'
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from "./aws-exports";
import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Adoption from "./pages/Adoption/Adoption";
import "./styles/App/index.css"
import NavMap from "./components/NavMap/NavMap";
import Services from "./pages/Services/Services";
import Profile from "./pages/Profile/Profile";


Amplify.configure(awsExports);

function App() {
  const formFields = {
    signUp: {
      email: {
        order: 2
      },
      preferred_username: {
        order: 1
      },
      password: {
        order: 3
      },
      confirm_password: {
        order: 4
      }
    }
  }

  return (
      <Authenticator loginMechanisms={['email']} signUpAttributes={['preferred_username']} formFields={formFields}>
        {() => (
          <BrowserRouter>
            <NavMap/>
            <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/Adoption'} element={<Adoption/>}/>
              <Route path={'/Job'} element={<Services/>}/>
              <Route path={'/profile/:profileId'} element={<Profile/>}/>
            </Routes>
          </BrowserRouter>
        )}
      </Authenticator>
  );
}

export default App;
