import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


class BookShelf extends Component {

    render() {
        return(
            <ol className="books-grid">
                {books.map((book) => (
                    <li>
                        <Books book={ book } books={ books } changeShelf={ changeShelf } />
                    </li>
                ))}
            </ol>
        )
    }
}

export default BookShelf