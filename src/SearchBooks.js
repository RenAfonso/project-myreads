import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    // state stores the query and the books array
    state = {
        query: '',
        books: []
    }

    //method to search books, as per lesson. On result, it maps the books array. Books with no shelf get displayed as well
    updateQuery = (query) => {
        this.setState({ query: query.trim(), books: [] });
        BooksAPI.search(query).then((result) => {
            this.setState({
                books: result.map((book) => {
                    let libraryBook = this.props.books.find((b) => (b.id === book.id));
                    book.shelf = libraryBook ? libraryBook.shelf : 'none';
                    return book;
                })
            });   
        });
    }

    render() {

        const { changeShelf } = this.props;
        const { query, books } = this.state;

        // return creates the search bar with a link (to return to app's root page) and calls the updateQuery method upon typing on search bar
        // it also maps the books array and creates li element for each book, calling the Book component on each li element
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

export default SearchBooks