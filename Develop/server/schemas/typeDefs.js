const {gql} = require('apollo-server-express');

const typeDefs = gql`


  type Book {
    _id: ID
    authors: [String]
    title: String
    bookId: String
    description: String
    image: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    authors: [String]
    title: String
    bookId: String
    description: String
    image: String
    link: String
  }

  type Query {
    users: [User]
    me(username: String!): User
    books: [Book]
    book(_id: ID!): Book
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    removeUser(username: String!): User
    saveBook(username: String!,input: BookInput): User
    removeBook(_id: ID!,bookId: String!): User
    login(email: String!, password: String!): Auth
  }`;

module.exports = typeDefs
