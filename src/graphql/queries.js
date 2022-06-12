/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($cognitoId: ID!) {
    getPlayer(cognitoId: $cognitoId) {
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
        games {
          nextToken
        }
        stats {
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
      nextToken
    }
  }
`;
export const getStats = /* GraphQL */ `
  query GetStats($id: ID!) {
    getStats(id: $id) {
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
export const listStats = /* GraphQL */ `
  query ListStats(
    $filter: ModelStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
