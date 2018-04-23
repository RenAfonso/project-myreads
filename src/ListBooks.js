import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooks extends Component {

    render() {
        let shelves = [
            { title: 'Currently Reading', type: 'currentlyReading' },
            { title: 'Want to Read', type: 'wantToRead' },
            { title: 'Read', type: 'read' }
        ]

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    {shelves.map((shelf, index) =>  {
                        return  (
                            <div className="bookshelf" key={ index }>
                                <h2 className="bookshelf-title">{ shelf.title }</h2>
                                <div className="bookshelf-books">
                                    <BookShelf books={ books.filter((book) => book.shelf === shelf.type) } changeShelf={ changeShelf } />
                                </div>
                            </div> )
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default ListBooks