import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


class BookShelf extends Component {

    render() {

        const { book, books, changeShelf } = this.props;

        return(
            <ol className="books-grid">
                {books.map((book) => (
                    <li key={ book }>
                        <Book book={ book } books={ books } changeShelf={ changeShelf } />
                    </li>
                ))}
            </ol>
        )
    }
}

BookShelf.PropTypes ={
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BookShelf