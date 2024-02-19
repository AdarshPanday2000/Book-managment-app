import React from 'react'
import { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import SoloBook from './SoloBook';

function ListBook() {

    const { books, setBooks } = useContext(BookContext);

    function handleRemoveBook(id){
        const filterDeletedBook = books.filter((book) => book.id !== id)
        setBooks(filterDeletedBook)
    }

  return (

     <>
        {books.length ? (<div className='grid grid-cols-3 gap-4 my-10 mx-40 h-60 '>
        {books.map((book) => (
            <div >
                <SoloBook key={book.id} bookprop = {book} deleteBook={handleRemoveBook}/>
            </div>                
        ))}
        </div> ) : 
            <p className='flex items-center justify-center mt-12 text-[#333] font-medium'>No books available, Please add some books!</p>}
    </>
  )
}

export default ListBook