import BookItem from './BookItem'
import './BookList.css'

const BookList = ({ booksData, deleteBookData, editBookData }) => {
  const books = booksData

  const getDeleteBookId = (id) => {
    deleteBookData(id)
  }

  const getEditBookId = (id) => {
    editBookData(id)
  }

  return (
    <div className="booklist">
      <h2 className="header">Books</h2>
      {books &&
        books.map((book) => {
          return (
            <BookItem
              key={book.id}
              author={book.author}
              title={book.title}
              month={book.month_of_published}
              year={book.year_of_published}
              id={book.id}
              onDeleteBook={getDeleteBookId}
              onEditBook={getEditBookId}
            />
          )
        })}
    </div>
  )
}

export default BookList
