import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class ListBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    render() {
        
        const { books, changeShelf } = this.props;
        
        // By my mentor's advice, I used the following line to track the object's properties: BooksAPI.getAll().then(books => {console.log(books)})
        // With that I was able to get these two relevant properties relating to shelf placement and stored them in an array.
        let shelves = [
            { title: 'Currently Reading', type: 'currentlyReading' },
            { title: 'Want to Read', type: 'wantToRead' },
            { title: 'Read', type: 'read' }
        ]

        // Return maps through the shelves array creating the relevant nodes and calls the BooksGrid component to display the matching books
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
                                    <BooksGrid books={ books.filter((book) => (book.shelf === shelf.type)) } changeShelf={ changeShelf } />
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