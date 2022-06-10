/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
