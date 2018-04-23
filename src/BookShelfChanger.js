import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from './App'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BookShelfChanger extends Component {
    
    
    render() {
        return(
            <div className="book-shelf-changer">
                <select onChange={() => this.props.onNewShelf(shelf)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}