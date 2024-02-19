import React, { Children, createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

export const BookContext = createContext();


export default function BookProvider({ children }) {
    const[books, setBooks] = useLocalStorage('books', [])
    
    const value = { books, setBooks}

  return (
    <BookContext.Provider value={value}>
        {children}
    </BookContext.Provider>
  )
};

