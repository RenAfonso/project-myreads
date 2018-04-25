import React, { Component } from 'react'

class BookShelfChanger extends Component {

    state = {
        shelf: ''
    }

    componentDidMount() {
        this.setState({ shelf: this.props.book.shelf });
    }

    getNewShelf(shelf) {
        this.setState({ shelf: shelf });
        this.props.changeShelf( this.props.book, shelf );
    }

    render() {
        
        return(
            <div className="book-shelf-changer">
                <select onChange={(e) => this.getNewShelf(e.target.value)} value={this.state.shelf}>
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

export default BookShelfChanger