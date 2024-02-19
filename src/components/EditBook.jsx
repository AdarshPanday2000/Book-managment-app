import React, { useContext } from 'react'
import BookForm from './BookForm'
import { BookContext } from '../context/BookContext';
import { useNavigate, useParams } from 'react-router-dom';

function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { books, setBooks } = useContext(BookContext);

    const bookToEdit = books.filter(book => book.id === id);

    function handleOnSubmit(book){
        const filteredBook = books.filter( book => book.id !== id)
        setBooks([book, ...filteredBook ])
        navigate('/')
    }

  return (
    <div>
        <BookForm bookEditProp = {bookToEdit[0]} handleSubmit = {handleOnSubmit} />
    </div>
  )
}

export default EditBook