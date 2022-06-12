import React from 'react';
import './App.css';
import Amplify, {API, Auth, graphqlOperation} from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {getPlayer} from './graphql/queries';
import {createGame, createPlayer} from './graphql/mutations';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import awsconfig from './aws-exports';
import BottomAppBar from "./components/BottomAppBar";
import GameDisplay from "./components/GameDisplay";
import { Global } from '@emotion/react';
import GameDrawer from "./components/GameDrawer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

Amplify.configure(awsconfig);

const theme = createTheme({
  palette: {
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#ffdb00',
    },
  },
});

const App = () => {
  const [cognitoId, setCognitoId] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [gameDrawerIsOpen, setGameDrawerIsOpen] = React.useState(false);

  const toggleGameDrawer = (newOpen) => () => {
    setGameDrawerIsOpen(newOpen);
  };

  const services = {
    async handleSignUp(formData) {
      let { username, password, attributes } = formData;
      // capitalize name
      attributes.given_name.replace(/^\w/, (c) => c.toUpperCase());
      attributes.family_name.replace(/^\w/, (c) => c.toUpperCase());
      return Auth.signUp({
        username,
        password,
        attributes,
      });
    },
  };

  React.useEffect(() => {
    Auth.currentUserInfo()
      .then(res => {
        console.log(res)
        const cognitoId = res.id;
        const fullName = res.attributes.given_name + ' ' + res.attributes.family_name;
        console.log(fullName);
        setCognitoId(cognitoId);
        API.graphql(graphqlOperation(getPlayer, {cognitoId: res.id})).then(res => {
          // set state to current dynamoDB user, or create if not already created
          if (res.data.getPlayer !== null) {
            setCurrentUser(res.data.getPlayer);
          } else {
            API.graphql(graphqlOperation(createPlayer, { input: { cognitoId, fullName }}));
          }
        });
      });
  }, []);

  return (
    <Authenticator
      loginMechanisms={['phone_number']}
      signUpAttributes={['given_name', 'family_name']}
      services={services}
    >
      {({ signOut, user }) => (
        <ThemeProvider theme={theme}>
          <main style={{ height: '100%' }}>
            <Global
              styles={{
                '.MuiDrawer-root > .MuiPaper-root': {
                  height: '85%',
                  overflow: 'visible',
                },
              }}
            />
            <Box sx={{ m: 2 }}>
              <Typography variant="h3">Hello LubeMaster</Typography>
              <button onClick={signOut}>Sign out</button>
            </Box>
            <GameDisplay />
            <GameDrawer toggleGameDrawer={toggleGameDrawer} gameDrawerIsOpen={gameDrawerIsOpen} />
            <BottomAppBar toggleGameDrawer={toggleGameDrawer} cognitoId={cognitoId} />
          </main>
        </ThemeProvider>
      )}
    </Authenticator>
  );
};

export default App;
