/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($cognitoId: ID!) {
    getPlayer(cognitoId: $cognitoId) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $cognitoId: ID
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayers(
      cognitoId: $cognitoId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        cognitoId
        fullName
        hasProfilePicture
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStats = /* GraphQL */ `
  query GetStats($id: ID!) {
    getStats(id: $id) {
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
export const listStats = /* GraphQL */ `
  query ListStats(
    $filter: ModelStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
