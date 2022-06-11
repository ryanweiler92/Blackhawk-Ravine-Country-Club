import { gql } from '@apollo/client'

export const GET_USERS = gql`
    query users {
        users {
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

export const GET_ME = gql`
query me {
    me{
      username
      _id
      scores{
          _id
          totalScore
          holesScore
          createdAt
        }
      }
    }
`