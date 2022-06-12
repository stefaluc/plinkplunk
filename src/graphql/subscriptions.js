/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      cognitoId
      fullName
      hasProfilePicture
      games {
        items {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        nextToken
      }
      stats {
        items {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      cognitoId
      fullName
      hasProfilePicture
      games {
        items {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        nextToken
      }
      stats {
        items {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      cognitoId
      fullName
      hasProfilePicture
      games {
        items {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        nextToken
      }
      stats {
        items {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      player1 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      player2 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      player3 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      player4 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      creator {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      playerName1
      playerName2
      playerName3
      playerName4
      score1
      score2
      player1Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      player2Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      player3Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      player4Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      notes
      createdAt
      updatedAt
      playerGamesId
      gamePlayer1Id
      gamePlayer2Id
      gamePlayer3Id
      gamePlayer4Id
      gameCreatorId
      gamePlayer1StatsId
      gamePlayer2StatsId
      gamePlayer3StatsId
      gamePlayer4StatsId
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      player1 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      player2 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      player3 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      player4 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      creator {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      playerName1
      playerName2
      playerName3
      playerName4
      score1
      score2
      player1Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      player2Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      player3Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      player4Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      notes
      createdAt
      updatedAt
      playerGamesId
      gamePlayer1Id
      gamePlayer2Id
      gamePlayer3Id
      gamePlayer4Id
      gameCreatorId
      gamePlayer1StatsId
      gamePlayer2StatsId
      gamePlayer3StatsId
      gamePlayer4StatsId
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      player1 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      player2 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      player3 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      player4 {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      creator {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      playerName1
      playerName2
      playerName3
      playerName4
      score1
      score2
      player1Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      player2Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      player3Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      player4Stats {
        id
        game {
          id
          playerName1
          playerName2
          playerName3
          playerName4
          score1
          score2
          notes
          createdAt
          updatedAt
          playerGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
          gameCreatorId
          gamePlayer1StatsId
          gamePlayer2StatsId
          gamePlayer3StatsId
          gamePlayer4StatsId
        }
        player {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        plunks
        selfPlunks
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        statsGameId
        playerStatsId
      }
      notes
      createdAt
      updatedAt
      playerGamesId
      gamePlayer1Id
      gamePlayer2Id
      gamePlayer3Id
      gamePlayer4Id
      gameCreatorId
      gamePlayer1StatsId
      gamePlayer2StatsId
      gamePlayer3StatsId
      gamePlayer4StatsId
    }
  }
`;
export const onCreateStats = /* GraphQL */ `
  subscription OnCreateStats {
    onCreateStats {
      id
      game {
        id
        player1 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        player2 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        player3 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        player4 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        creator {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        playerName1
        playerName2
        playerName3
        playerName4
        score1
        score2
        player1Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        player2Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        player3Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        player4Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        notes
        createdAt
        updatedAt
        playerGamesId
        gamePlayer1Id
        gamePlayer2Id
        gamePlayer3Id
        gamePlayer4Id
        gameCreatorId
        gamePlayer1StatsId
        gamePlayer2StatsId
        gamePlayer3StatsId
        gamePlayer4StatsId
      }
      player {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      plunks
      selfPlunks
      didWin
      plinks
      drinks
      points
      createdAt
      updatedAt
      statsGameId
      playerStatsId
    }
  }
`;
export const onUpdateStats = /* GraphQL */ `
  subscription OnUpdateStats {
    onUpdateStats {
      id
      game {
        id
        player1 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        player2 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        player3 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        player4 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        creator {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        playerName1
        playerName2
        playerName3
        playerName4
        score1
        score2
        player1Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        player2Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        player3Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        player4Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        notes
        createdAt
        updatedAt
        playerGamesId
        gamePlayer1Id
        gamePlayer2Id
        gamePlayer3Id
        gamePlayer4Id
        gameCreatorId
        gamePlayer1StatsId
        gamePlayer2StatsId
        gamePlayer3StatsId
        gamePlayer4StatsId
      }
      player {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      plunks
      selfPlunks
      didWin
      plinks
      drinks
      points
      createdAt
      updatedAt
      statsGameId
      playerStatsId
    }
  }
`;
export const onDeleteStats = /* GraphQL */ `
  subscription OnDeleteStats {
    onDeleteStats {
      id
      game {
        id
        player1 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        player2 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        player3 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        player4 {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        creator {
          cognitoId
          fullName
          hasProfilePicture
          createdAt
          updatedAt
        }
        playerName1
        playerName2
        playerName3
        playerName4
        score1
        score2
        player1Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        player2Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        player3Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        player4Stats {
          id
          plunks
          selfPlunks
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
          statsGameId
          playerStatsId
        }
        notes
        createdAt
        updatedAt
        playerGamesId
        gamePlayer1Id
        gamePlayer2Id
        gamePlayer3Id
        gamePlayer4Id
        gameCreatorId
        gamePlayer1StatsId
        gamePlayer2StatsId
        gamePlayer3StatsId
        gamePlayer4StatsId
      }
      player {
        cognitoId
        fullName
        hasProfilePicture
        games {
          nextToken
        }
        stats {
          nextToken
        }
        createdAt
        updatedAt
      }
      plunks
      selfPlunks
      didWin
      plinks
      drinks
      points
      createdAt
      updatedAt
      statsGameId
      playerStatsId
    }
  }
`;
