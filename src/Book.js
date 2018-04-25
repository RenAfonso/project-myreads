import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    render() {

        const { book, books, changeShelf } = this.props;

        const bookCover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''; //checks existing thumbnail
        const bookTitle = book.title ? book.title : ''; //checks existing title
        const bookAuthor = book.authors ? book.authors.join(', ') : ''; //separates multiple authors by ', '

        // creates all elements for a book, including cover, title, author and component BookShelfChanger
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookCover}")`}}></div>
                    <BookShelfChanger book={ book } books={ books } changeShelf={ changeShelf }/>
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{ bookAuthor}</div>
            </div>
        )
    }
}

export default Book