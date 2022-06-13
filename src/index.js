import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth} from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const services = {
  async handleSignUp(formData) {
    let { username, password, attributes } = formData;
    // capitalize name
    console.log('attributes:')
    console.log(attributes)
    attributes.given_name = attributes.given_name.charAt(0).toUpperCase() + attributes.given_name.slice(1);
    attributes.family_name = attributes.family_name.charAt(0).toUpperCase() + attributes.family_name.slice(1);
    console.log(attributes)
    return Auth.signUp({
      username,
      password,
      attributes,
    });
  },
};

root.render(
  <React.StrictMode>
    <Authenticator
      loginMechanisms={['phone_number']}
      signUpAttributes={['given_name', 'family_name']}
      services={services}
    >
      {({ signOut, user }) => (
        <App signOut={signOut} />
      )}
    </Authenticator>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
