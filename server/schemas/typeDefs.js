const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
    me: User
    users: [User]
  }

  type Mutation {
    register(user: NewUser!): AuthResponse
    signin(username: String!, password: String!): AuthResponse
    saveScore(
      totalScore: Int!
      holesScore: [Int!]
      userID: ID
      createdAt: String
    ): User
  }

  input NewUser {
    username: String!
    password: String!
  }

  type User {
    _id: ID
    username: String
    scores: [Score]
  }
  
  type AuthResponse {
    username: String
    token: String
  }

  type Score {
    _id: ID,
    totalScore: String
    holesScore: [String]
    userID: String
    createdAt: String
}
`


module.exports = typeDefs