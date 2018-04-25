import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


class BookShelf extends Component {

    render() {

        const { books, changeShelf } = this.props;

        return(
            <ol className="books-grid">
                {books.map((book, index) => (
                    <li key={ index }>
                        <Book book={ book } books={ books } changeShelf={ changeShelf } />
                    </li>
                ))}
            </ol>
        )
    }
}

BookShelf.PropTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BookShelf