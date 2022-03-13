import React from 'react';
import './App.css';
import Amplify from 'aws-amplify'
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from "./aws-exports";
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test from "./pages/Test";

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
          <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/Test'} element={<Test/>}/>
          </Routes>
        </BrowserRouter>
      )}
    </Authenticator>
  );
}

export default App;
