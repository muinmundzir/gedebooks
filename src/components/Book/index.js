import { useState, useEffect } from "react";
import axios from "axios";

import "./Book.css";
import BookForm from "./BookForm";
import BookList from "./BookList";

const Book = () => {
  const [booksData, setBooksData] = useState([]);
  const [formData, setFormData] = useState({
    author: "",
    id: "",
    month_of_published: "",
    synopsis: "",
    title: "",
    listed: "",
    year_of_published: "",
  });

  const getBooks = async () => {
    const result = await axios.get("https://react-gedebooks.netlify.app/books");
    setBooksData(result.data);
  };

  const handleAddBook = async (bookData) => {
    try {
      await axios.post("https://react-gedebooks.netlify.app/books", bookData);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`https://react-gedebooks.netlify.app/books/${bookId}`);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditBook = async (bookId) => {
    try {
      const result = await axios.get(
        `https://react-gedebooks.netlify.app/books/${bookId}`,
      );
      setFormData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateBook = async (book) => {
    try {
      await axios.patch(
        `https://react-gedebooks.netlify.app/books/${book.id}`,
        book,
      );
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <main className="main">
      <BookForm
        onAddBook={handleAddBook}
        onUpdateBook={handleUpdateBook}
        formData={formData}
      />
      <BookList
        booksData={booksData}
        deleteBookData={handleDeleteBook}
        editBookData={handleEditBook}
      />
    </main>
  );
};

export default Book;
