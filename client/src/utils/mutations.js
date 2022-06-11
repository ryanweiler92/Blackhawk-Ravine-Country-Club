import { gql } from '@apollo/client'

export const REGISTER = gql`
mutation register ($username: String!, $password: String!) {
    register (username: $username, password: $password){
      token
    }
  }
`
export const LOGIN = gql`
mutation signin($username: String!, $password: String!) {
    signin(username: $username, password: $password){
      username
      token
    }
  }
`
export const SAVE_SCORE = gql`
mutation saveScore($totalScore: Int!, $holesScore: [Int!], $userID: ID, $createdAt: String) {
  saveScore(totalScore: $totalScore, holesScore: $holesScore, userID: $userID, createdAt: $createdAt){
        _id 
        username
        scores{
            _id
            totalScore
            holesScore
            createdAt
            }
        }
    }
`