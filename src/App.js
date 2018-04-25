import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends Component {
    
    state = {
        books: []
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        BooksAPI.getAll()
            .then(books => {
                this.setState({ books })
            })
    }

    changeShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf)
            .then((result) =>{
                this.getBooks();
            })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks books={this.state.books} changeShelf={this.changeShelf} />
                )}
                />
                <Route path="/search" render={({ history }) => (
                    <SearchBooks books={this.state.books} changeShelf={this.changeShelf} />
                )} />
                <div className="open-search">
                    <Link to="/search">Search</Link>
                </div>
            </div>    
        )
    }
}

export default BooksApp
