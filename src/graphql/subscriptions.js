/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
    onCreateGame(filter: $filter) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
    onUpdateGame(filter: $filter) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
    onDeleteGame(filter: $filter) {
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
export const onCreateStats = /* GraphQL */ `
  subscription OnCreateStats($filter: ModelSubscriptionStatsFilterInput) {
    onCreateStats(filter: $filter) {
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
export const onUpdateStats = /* GraphQL */ `
  subscription OnUpdateStats($filter: ModelSubscriptionStatsFilterInput) {
    onUpdateStats(filter: $filter) {
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
export const onDeleteStats = /* GraphQL */ `
  subscription OnDeleteStats($filter: ModelSubscriptionStatsFilterInput) {
    onDeleteStats(filter: $filter) {
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
