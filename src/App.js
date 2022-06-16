import React from 'react';
import './App.css';
import Amplify, {API, Auth, graphqlOperation, Storage} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import {getPlayer, listGames, listPlayers} from './graphql/queries';
import {createPlayer} from './graphql/mutations';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import awsconfig from './aws-exports';
import BottomAppBar from "./components/BottomAppBar";
import GamesDisplay from "./components/GamesDisplay";
import GameDrawer from "./components/GameDrawer";
import SideDrawer from "./components/SideDrawer";
import HallOfFame from "./components/HallOfFame";
import HallOfShame from "./components/HallOfShame";

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

const App = ({ signOut }) => {
  const [cognitoId, setCognitoId] = React.useState('');
  const [currentPlayer, setCurrentPlayer] = React.useState({});
  const [gameDrawerIsOpen, setGameDrawerIsOpen] = React.useState(false);
  const [sideDrawerIsOpen, setSideDrawerIsOpen] = React.useState(false);
  const [isFameOpen, setIsFameOpen] = React.useState(false);
  const [isShameOpen, setIsShameOpen] = React.useState(false);
  const [profilePic, setProfilePic] = React.useState(null);
  const [games, setGames] = React.useState([]);
  const [gamesAreLoading, setGamesAreLoading] = React.useState(false);
  const [players, setPlayers] = React.useState([]);

  const toggleGameDrawer = (newOpen) => () => {
    setGameDrawerIsOpen(newOpen);
  };

  const toggleSideDrawer = (newOpen) => () => {
    setSideDrawerIsOpen(newOpen);
  };

  const handleOpenFame = () => {
    setIsFameOpen(true);
  };

  const handleCloseFame = () => {
    setIsFameOpen(false);
  };

  const handleOpenShame = () => {
    setIsShameOpen(true);
  };

  const handleCloseShame = () => {
    setIsShameOpen(false);
  };

  React.useEffect(() => {
    Auth.currentUserInfo()
      .then(res => {
        console.log("Auth.currentUserInfo: ");
        console.log(res);
        const cognitoId = res.id;
        const fullName = res.attributes.given_name + ' ' + res.attributes.family_name;
        console.log(fullName);
        setCognitoId(cognitoId);
        API.graphql(graphqlOperation(getPlayer, {cognitoId: res.id})).then(res => {
          console.log("getPlayer: ");
          console.log(res);
          // set state to current dynamoDB user, or create if not already created
          if (res.data.getPlayer !== null) {
            setCurrentPlayer(res.data.getPlayer);
            if (res.data.getPlayer.hasProfilePicture) {
              Storage.get('profile-picture', {level: 'protected'}).then(res => {
                console.log(res);
                setProfilePic(res);
              });
            }
          } else {
            API.graphql(graphqlOperation(createPlayer, { input: { cognitoId, fullName, hasProfilePicture: false }}))
              .then(res => {
                console.log("createPlayer: ");
                console.log(res);
                setCurrentPlayer(res.data.createPlayer);
              });
          }
        });
      });
  }, []);

  React.useEffect(() => {
    setGamesAreLoading(true);
    API.graphql(graphqlOperation(listGames)).then(res => {
      console.log("listGames: ");
      console.log(res);
      setGames(res.data.listGames.items.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)));
      setGamesAreLoading(false);
    });
  }, []);

  React.useEffect(() => {
    API.graphql(graphqlOperation(listPlayers)).then(res => {
      console.log("listPlayers: ");
      console.log(res);
      setPlayers(res.data.listPlayers.items);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <main style={{ height: '100%' }}>
        <GamesDisplay
          currentPlayer={currentPlayer}
          games={games}
          gamesAreLoading={gamesAreLoading}
          setGames={setGames}
        />
        <GameDrawer
          currentPlayer={currentPlayer}
          players={players}
          toggleGameDrawer={toggleGameDrawer}
          gameDrawerIsOpen={gameDrawerIsOpen}
          games={games}
          setGames={setGames}
          setGameDrawerIsOpen={setGameDrawerIsOpen}
        />
        <SideDrawer
          sideDrawerIsOpen={sideDrawerIsOpen}
          toggleSideDrawer={toggleSideDrawer}
          handleOpenFame={handleOpenFame}
          handleOpenShame={handleOpenShame}
        />
        <HallOfFame
          games={games}
          isFameOpen={isFameOpen}
          handleCloseFame={handleCloseFame}
        />
        <HallOfShame
          games={games}
          isShameOpen={isShameOpen}
          handleCloseShame={handleCloseShame}
        />
        <BottomAppBar
          toggleSideDrawer={toggleSideDrawer}
          toggleGameDrawer={toggleGameDrawer}
          cognitoId={cognitoId}
          profilePic={profilePic}
          signOut={signOut}
          currentPlayer={currentPlayer}
          setProfilePic={setProfilePic}
        />
      </main>
    </ThemeProvider>
  );
};

export default App;
