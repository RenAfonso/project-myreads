# MyReads 

### Description

This is a simple app to manage books that one is, wants to or finished reading. It is part of Udacity's Front-End Nanodegree

## Install

Please, clone or download this project to a folder of your choice.

* install or update [Node.js](https://nodejs.org/en/)
* install all project dependencies with `npm install` on your terminal
* start the app with `npm start`

## How to use

The app is fairly simple in its use. Upon load, you'll see a page with three titles, or in this case shelves, that display a group of books. Each book on the first page has one of these states: Read, Currently Reading or Want to Read. Books that don't belong on any of those shelves are not displayed in the first page. Each book has an option that allows the book to be placed on a different shelf.

On the bottom right of the screen, there's an option to add books to the shelves which leads to a search bar in a different page.

#### Search

The search is limited to the following terms: 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'.

The search result lists all relevant books and each will have the same option to place on a new shelf. Books placed on a shelf will be displayed in the front page.

## Architecture

These are the components used in this project and their connections.
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY.
└── src
    ├── App.css # Styles app
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing.
    ├── Book.js # Each book to display.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── BooksGrid.js # Used to create the ordered list for each shelf.
    ├── BookShelfChanger.js # Used to allow books to change shelf.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # Used for DOM rendering only.
    ├── ListBooks.js # Used to display shelves on front page.
    └── SearchBooks.js # Used to search for books.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

There won't be a follow up on this project but pull requests will be accepted if relevant.
