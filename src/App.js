import React from 'react';
import './App.css';
import Amplify, {API, Auth, graphqlOperation} from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {getUser} from './graphql/queries';
import {createGame, createUser} from './graphql/mutations';
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

  React.useEffect(() => {
    Auth.currentUserCredentials()
      .then(res => {
        const cognitoId = res.identityId;
        setCognitoId(cognitoId);
        API.graphql(graphqlOperation(getUser, {cognitoId: res.identityId})).then(res => {
          // set state to current dynamoDB user, or create if not already created
          if (res.data.getUser !== null) {
            setCurrentUser(res.data.getUser);
          } else {
            API.graphql(graphqlOperation(createUser, { input: { cognitoId }}));
          }
        });
      });
  }, []);

  return (
    <Authenticator
      loginMechanisms={['phone_number']}
      signUpAttributes={['phone_number', 'username', 'name', 'email']}
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
            <BottomAppBar toggleGameDrawer={toggleGameDrawer} />
          </main>
        </ThemeProvider>
      )}
    </Authenticator>
  );
};

export default App;
