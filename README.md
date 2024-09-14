## Book Search Engine

## Description
This project is a React application that allows users to search for books using the Google Books API, save books to their account, and view their saved books. It leverages React Bootstrap for UI components and Apollo Client for interacting with a GraphQL API.

## Deployed Link
[BookSearchEngine](https://booksearchengine-uje4.onrender.com)

## Screenshots
![screenshot](./screenshots/booksearchengine.png)

## Features

- **Search for Books**: Users can search for books using the Google Books API.
- **Save Books**: Users can save books to their account.
- **View Saved Books**: Users can view a list of books they have saved.
- **Delete Saved Books**: Users can remove books from their saved list.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **React Bootstrap**: For styling and UI components.
- **Apollo Client**: For managing GraphQL data.
- **GraphQL**: For querying and mutating data.
- **Google Books API**: For searching books.

## Installation

1. Clone the Repository:
git clone https://github.com/your-username/book-search-app.git
cd book-search-app
2. Install Dependencies: npm install
3. Set Up Environment Variables: Create a .env file in the root directory of the project and add the necessary environment variables. For example:
REACT_APP_GOOGLE_BOOKS_API_KEY=your_google_books_api_key
REACT_APP_GRAPHQL_ENDPOINT=your_graphql_endpoint
4. Start the Development Server: npm start
This will start the React development server and you can view the app in your browser at http://localhost:3000.

## Usage

Search for Books
1. Enter a search term in the search input field.
2. Click the "Submit Search" button.
3. View the search results and choose a book to save.

View Saved Books
1. Navigate to the "Saved Books" section to view a list of books you have saved.
2. You can delete a saved book by clicking the "Delete this Book!" button next to it.

## Code Overview

SavedBooks Component
- **Purpose**: Displays a list of saved books and allows users to delete them.
- **Key Functions**:
    - **handleDeleteBook**: Deletes a book from the saved list.
SearchBooks Component
- **Purpose**: Allows users to search for books and save them to their account.
- **Key Functions**:
  - **handleFormSubmit**: Handles book search form submission.
  - **handleSaveBook**: Saves a book to the user's account.

GraphQL Queries and Mutations

- **Queries**:

- **GET_ME**: Retrieves the current user's saved books.

- **Mutations**:

- **DELETE_BOOK**: Deletes a book from the user's saved list.
- **SAVE_BOOK**: Saves a book to the user's account.

Local Storage Utilities

- **saveBookIds**: Saves an array of book IDs to local storage.
- **getSavedBookIds**: Retrieves saved book IDs from local storage.
- **removeBookId**: Removes a book ID from local storage.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Make sure to include tests for any new features or bug fixes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For questions or feedback, please contact FaizaHaque90@gmail.com.



