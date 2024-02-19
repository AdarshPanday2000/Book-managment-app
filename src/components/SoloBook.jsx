import React from 'react'
import { useNavigate } from 'react-router-dom';

function SoloBook({ bookprop, deleteBook }) {
  const navigate = useNavigate();
  const { id, name, author, price, date } = bookprop;

  return (
    <div className='bg-gray-200 p-3 shadow-xl'>
      <h2 className='text-2xl font-semibold underline text-gray-900'>{name}</h2>
      <div className='mt-3 text-gray-800 font-medium flex flex-col gap-2'>
        <p>Author: {author}</p>
        <p>Price: {price}</p>
        <p>Date: {new Date(date).toDateString()}</p>
      </div>

      <div className='mt-4 flex items-center justify-center gap-3 text-sm'>
        <button onClick={() => navigate(`/edit/${id}`)} className='border border-gray-900 px-3 py-1 hover:text-white hover:bg-gray-800 duration-200'>Edit</button>
        <button onClick={() => deleteBook(id)} className='border border-gray-900 px-3 py-1 hover:text-white hover:bg-gray-800 duration-200'>Delete</button>
      </div>
    </div>
  )
}

export default SoloBook