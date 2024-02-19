import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function BookForm({ bookEditProp, handleSubmit }) {
    const [bookState, setBookState] = useState({
        name : bookEditProp ? bookEditProp.name : '',
        author : bookEditProp ? bookEditProp.author :  '',
        price : bookEditProp ? bookEditProp.price :  '',
    })
    // console.log(bookState);

    function handleChange(e){
        setBookState({
            ...bookState,
            [e.target.name] : e.target.value,
        })
    }

    function onSubmit(e){
        e.preventDefault();
        handleSubmit({
            id : uuidv4(),
            date : new Date(),
            ...bookState,
        });
        setBookState({ name: '', author: '', price: ''})
    }

    const renderInputField = (label,placeholder,name) => (
        <div className='flex flex-col justify-start gap-2 mb-6'>
            <label required className='text-gray-800 font-medium'>{label}</label>
            <input name={name} type='text' required value={bookState[name]} onChange={handleChange} placeholder={placeholder} className='p-2 font-thin text-gray-800 outline-none border-b border-gray-600'/>
        </div>
    )

  return (
    <div className='flex justify-center items-center mt-6'>
        <form onSubmit={onSubmit} className=' w-72'>
            {renderInputField('Book Name :', 'Enter name of book', 'name')}
            {renderInputField('Book Author :', 'Enter name of author', 'author')}
            {renderInputField('Book Price :', 'Enter price of book', 'price')}
            <button type='submit' className='w-full border-2 border-black p-1 font-semibold hover:bg-black hover:text-white duration-200 cursor-pointer mt-4'>{bookEditProp ? 'Update' : 'Submit'}</button>
        </form>
    </div>
  )
}

export default BookForm