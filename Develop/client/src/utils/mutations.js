import { gql } from '@apollo/client';

export const REMOVE_BOOK = gql`
mutation RemoveBook($_id: ID!, $bookId: String!) {
    removeBook(_id: $_id, bookId: $bookId) {
      username
    }
  }
`
export const SAVE_BOOK = gql`
mutation SaveBook($username: String!, $input: BookInput) {
    saveBook(username: $username, input: $input) {
      username
    }
  }
`
export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
  token
  user {
    username
    email
   
  }
  }
}
`
export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password){
        token
        user{
          username
          email
        }
    }
  }
`
