/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($cognitoId: ID!) {
    getUser(cognitoId: $cognitoId) {
      cognitoId
      gamesPlayed
      plunks
      games {
        items {
          id
          score1
          score2
          plunks1
          plunks2
          plunks3
          plunks4
          createdAt
          updatedAt
          userGamesId
          gamePlayer1Id
          gamePlayer2Id
          gamePlayer3Id
          gamePlayer4Id
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $cognitoId: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      cognitoId: $cognitoId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        cognitoId
        gamesPlayed
        plunks
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      player1 {
        cognitoId
        gamesPlayed
        plunks
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      player2 {
        cognitoId
        gamesPlayed
        plunks
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      player3 {
        cognitoId
        gamesPlayed
        plunks
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      player4 {
        cognitoId
        gamesPlayed
        plunks
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      score1
      score2
      plunks1
      plunks2
      plunks3
      plunks4
      createdAt
      updatedAt
      userGamesId
      gamePlayer1Id
      gamePlayer2Id
      gamePlayer3Id
      gamePlayer4Id
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
        player1 {
          cognitoId
          gamesPlayed
          plunks
          createdAt
          updatedAt
        }
        player2 {
          cognitoId
          gamesPlayed
          plunks
          createdAt
          updatedAt
        }
        player3 {
          cognitoId
          gamesPlayed
          plunks
          createdAt
          updatedAt
        }
        player4 {
          cognitoId
          gamesPlayed
          plunks
          createdAt
          updatedAt
        }
        score1
        score2
        plunks1
        plunks2
        plunks3
        plunks4
        createdAt
        updatedAt
        userGamesId
        gamePlayer1Id
        gamePlayer2Id
        gamePlayer3Id
        gamePlayer4Id
      }
      nextToken
    }
  }
`;
