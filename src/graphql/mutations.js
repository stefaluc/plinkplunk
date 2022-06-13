/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
        game {
          id
          player1Name
          player2Name
          player3Name
          player4Name
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
export const createStats = /* GraphQL */ `
  mutation CreateStats(
    $input: CreateStatsInput!
    $condition: ModelStatsConditionInput
  ) {
    createStats(input: $input, condition: $condition) {
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
export const updateStats = /* GraphQL */ `
  mutation UpdateStats(
    $input: UpdateStatsInput!
    $condition: ModelStatsConditionInput
  ) {
    updateStats(input: $input, condition: $condition) {
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
export const deleteStats = /* GraphQL */ `
  mutation DeleteStats(
    $input: DeleteStatsInput!
    $condition: ModelStatsConditionInput
  ) {
    deleteStats(input: $input, condition: $condition) {
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
