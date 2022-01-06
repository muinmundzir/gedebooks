import './BookItem.css'
import Button from '../../Button'

const BookItem = ({
  title,
  author,
  month,
  year,
  id,
  onDeleteBook,
  onEditBook,
}) => {
  const handleDelete = ({ id }) => {
    onDeleteBook(id)
  }

  const handleEdit = ({ id }) => {
    onEditBook(id)
  }

  return (
    <>
      <div className="book__card">
        <div className="book__info">
          <h3 className="book__title">{title}</h3>
          <p className="book__author">
            {author} - {month}, {year}
          </p>
        </div>
        <div className="book__action">
          <Button
            buttonClass="button button--warning"
            onClick={() => handleEdit({ id })}
          >
            Edit
          </Button>
          <Button
            buttonClass="button button--danger"
            onClick={() => handleDelete({ id })}
          >
            Remove
          </Button>
        </div>
      </div>
    </>
  )
}

export default BookItem
