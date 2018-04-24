import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

    state = {
        query: '',
        booksList: []
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    render() {

        const { books, changeShelf } = this.props;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={ query } onChange={(e) => this.updateQuery(e.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {booksList.map((book, index) => (
                        <li key={ index }>
                            <Book book={ book } books={ books } changeShelf={ changeShelf } />
                        </li>
                    ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks