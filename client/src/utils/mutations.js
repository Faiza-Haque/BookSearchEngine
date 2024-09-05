import {gql} from "@apollo/client"

export const CREATE_USER = gql`
    mutation Mutation($username: String, $email: String, $password: String) {
        createUser(username: $username, email: $email, password: $password) {
            token
    }
}
`

export const LOGIN_USER = gql`
    mutation Mutation($username: String, $email: String, $password: String) {
        login(username: $username, email: $email, password: $password) {
            token
        }
    }
`

export const SAVE_BOOK = gql`
    mutation Mutation($authors: [String], $description: String, $bookId: String, $image: String, $link: String, $title: String) {
  saveBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
    username
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`

export const DELETE_BOOK = gql`
    mutation Mutation($bookId: ID!) {
  deleteBook(bookId: $bookId) {
    username
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`