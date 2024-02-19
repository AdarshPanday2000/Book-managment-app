import React, { useContext } from 'react'
import BookForm from './BookForm'
import { BookContext } from '../context/BookContext';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const navigate = useNavigate();
    const { books, setBooks } = useContext(BookContext);

    function handleOnSubmit(book){
        setBooks([book, ...books ])
        navigate('/')
    }

  return (
    <div>
        <BookForm handleSubmit = {handleOnSubmit} />
    </div>
  )
}

export default AddBook