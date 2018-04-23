import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from './App'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Book extends Component {
    state = {
        shelf = ''
    }
    
    newShelf = (shelf) => {
        this.setState({
            shelf: shelf
        })
    }

    render() {
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLink.thumbnail})`}}></div>
                    <BookShelfChanger bookShelf={this.state.shelf} onNewShelf={this.newShelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

export default Book