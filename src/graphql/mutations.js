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
        nextToken
        __typename
      }
      stats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        nextToken
        __typename
      }
      stats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        nextToken
        __typename
      }
      stats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        createdAt
        updatedAt
        __typename
      }
      player2 {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
      }
      player3 {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
      }
      player4 {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
      }
      creator {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
      __typename
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
        createdAt
        updatedAt
        __typename
      }
      player2 {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
      }
      player3 {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
      }
      player4 {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
      }
      creator {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
      __typename
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
        createdAt
        updatedAt
        __typename
      }
      player2 {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
      }
      player3 {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
      }
      player4 {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
      }
      creator {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
      __typename
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
      plunks
      selfPlunk
      didWin
      plinks
      drinks
      points
      createdAt
      updatedAt
      playerStatsId
      __typename
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
      plunks
      selfPlunk
      didWin
      plinks
      drinks
      points
      createdAt
      updatedAt
      playerStatsId
      __typename
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
      plunks
      selfPlunk
      didWin
      plinks
      drinks
      points
      createdAt
      updatedAt
      playerStatsId
      __typename
    }
  }
`;
