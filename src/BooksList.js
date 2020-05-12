import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './components/BookShelf';

class BooksList extends Component {
  shelfChange = (book, e) => {
    this.props.onShelfChange(book, e.target.value)
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf books={this.props.books} shelfChange={this.shelfChange} />
        <div className="open-search">
          <Link to='/search'><button></button></Link>
        </div>
      </div>
    )
  }
}

export default BooksList