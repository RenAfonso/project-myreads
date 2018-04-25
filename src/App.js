import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

// NOTE: All components are named after the class of the first node displayed by such component, to better understand their placement
class BooksApp extends Component {
    
    // state stores books fetched from database
    state = {
        books: []
    }

    // calls method to fetch books on load
    componentDidMount() {
        this.getBooks();
    }

    // gets the books from database
    getBooks = () => {
        BooksAPI.getAll()
            .then(books => {
                this.setState({ books })
            })
    }

    //method to assign a new shelf to a book
    changeShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf)
            .then((result) =>{
                this.getBooks();
            })
    }

    // render method with two components and one link: ListBooks displays shelves, Link opens search and SearchBooks does exactly what is says
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
