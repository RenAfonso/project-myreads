import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim(), books: [] });
        BooksAPI.search(query).then((result) => {
            this.setState({
                books: result.map((book) => {
                    let searchedBook = this.props.books.find((b) => (b.id === book.id));
                    book.shelf = searchedBook ? searchedBook.shelf : 'none';
                    return book;
                })
            });   
        });
    }

    render() {

        const { changeShelf } = this.props;
        const { query, books } = this.state;

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
                    {books.map((book, index) => (
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

SearchBooks.PropTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default SearchBooks