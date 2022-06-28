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
          player1Name
          player2Name
          player3Name
          player4Name
          score1
          score2
          notes
          location
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
          selfPlunk
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
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
          player1Name
          player2Name
          player3Name
          player4Name
          score1
          score2
          notes
          location
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
          selfPlunk
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
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
          player1Name
          player2Name
          player3Name
          player4Name
          score1
          score2
          notes
          location
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
          selfPlunk
          didWin
          plinks
          drinks
          points
          createdAt
          updatedAt
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
      player1Name
      player2Name
      player3Name
      player4Name
      score1
      score2
      player1Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      player2Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      player3Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      player4Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      notes
      location
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
      player1Name
      player2Name
      player3Name
      player4Name
      score1
      score2
      player1Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      player2Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      player3Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      player4Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      notes
      location
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
      player1Name
      player2Name
      player3Name
      player4Name
      score1
      score2
      player1Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      player2Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      player3Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      player4Stats {
        id
        plunks
        selfPlunk
        didWin
        plinks
        drinks
        points
        createdAt
        updatedAt
        playerStatsId
      }
      notes
      location
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
      plunks
      selfPlunk
      didWin
      plinks
      drinks
      points
      createdAt
      updatedAt
      playerStatsId
    }
  }
`;
export const onUpdateStats = /* GraphQL */ `
  subscription OnUpdateStats {
    onUpdateStats {
      id
      plunks
      selfPlunk
      didWin
      plinks
      drinks
      points
      createdAt
      updatedAt
      playerStatsId
    }
  }
`;
export const onDeleteStats = /* GraphQL */ `
  subscription OnDeleteStats {
    onDeleteStats {
      id
      plunks
      selfPlunk
      didWin
      plinks
      drinks
      points
      createdAt
      updatedAt
      playerStatsId
    }
  }
`;
