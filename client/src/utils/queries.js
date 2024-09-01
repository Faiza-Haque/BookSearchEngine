import gql from "@apollo/client"

export const GET_SINGLE_USER = gql`
query Query($getSingleUserId: ID, $username: String) {
    getSingleUser(id: $getSingleUserId, username: $username) {
        email
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