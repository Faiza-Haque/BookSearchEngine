module.exports = `

    type Book {
        bookId: ID!
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID!
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Auth {
        _id: ID!
        token: String
        
    }


    type Query {
        getSingleUser(id: ID, username: String): User
        me: User
    }

    type Mutation {
        createUser(username: String, email: String, password: String): Auth
        login(username: String, email: String, password: String): Auth
        saveBook(authors: [String], description: String, bookId: String, image: String, link: String, title: String): User
        deleteBook(bookId: ID!): User
    }
`