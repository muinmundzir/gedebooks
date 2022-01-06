import { useState, useEffect } from 'react'

import TextInput from '../../Input/TextInput'
import TextAreaInput from '../../Input/TextAreaInput'
import SelectInput from '../../Input/SelectInput'
import CheckInput from '../../Input/CheckInput'
import Button from '../../Button'
import './BookForm.css'

const BookForm = ({ formData, onAddBook, onUpdateBook }) => {
  const [bookForm, setBookForm] = useState(formData)

  useEffect(() => {
    if (formData) {
      setBookForm(formData)
    }
  }, [formData])

  const handleChange = (event) => {
    let { name, value, checked } = event.target
    if (name === 'listed') {
      setBookForm({ ...bookForm, [name]: checked })
    } else {
      setBookForm({ ...bookForm, [name]: value })
    }
  }

  const handleUpdate = async (bookId) => {
    const book = {
      id: bookId,
      title: bookForm.title,
      author: bookForm.author,
      month_of_published: bookForm.month,
      year_of_published: bookForm.year,
      synopsis: bookForm.synopsis,
      listed: bookForm.listed,
    }

    onUpdateBook(book)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const book = {
      title: bookForm.title,
      author: bookForm.author,
      month_of_published: bookForm.month,
      year_of_published: bookForm.year,
      synopsis: bookForm.synopsis,
      listed: bookForm.listed,
    }

    onAddBook(book)
  }

  return (
    <form className="form" onSubmit={(event) => handleSubmit(event)}>
      <h2 className="header">Books</h2>
      <p className="form__desc">Insert the book data below.</p>
      <TextInput
        label="Title"
        name="title"
        type="text"
        value={bookForm && bookForm.title}
        placeholder="i.e. Harry Potter and The Chamber of Secrets"
        onChange={(event) => handleChange(event)}
      />
      <TextInput
        label="Author"
        name="author"
        type="text"
        value={bookForm && bookForm.author}
        placeholder="i.e. J. K. Rowling"
        onChange={(event) => handleChange(event)}
      />
      <label className="form__label">Published</label>
      <div className="form__select">
        <SelectInput
          name="month"
          placeholder="Month"
          value={bookForm && bookForm.month_of_published}
          onChange={(event) => handleChange(event)}
        />
        <SelectInput
          name="year"
          placeholder="Year"
          value={bookForm && bookForm.year_of_published}
          onChange={(event) => handleChange(event)}
        />
      </div>
      <TextAreaInput
        label="Synopsis"
        name="synopsis"
        value={bookForm && bookForm.synopsis}
        placeholder="Enter the synopsis of the book here"
        onChange={(event) => handleChange(event)}
      />
      <CheckInput
        value={bookForm && bookForm.listed}
        label="Approve this book to be listed"
        name="listed"
        onChange={(event) => handleChange(event)}
      />
      {formData.id !== '' ? (
        <Button
          type="button"
          buttonClass={`button button--primary${
            bookForm.listed ? '' : '--disabled'
          }`}
          onClick={() => handleUpdate(formData.id)}
        >
          Update
        </Button>
      ) : (
        <Button
          type="submit"
          buttonClass={`button button--primary${
            bookForm.listed ? '' : '--disabled'
          }`}
        >
          Submit
        </Button>
      )}
    </form>
  )
}

export default BookForm
