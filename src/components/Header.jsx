import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {

    const navigation = [
        { path: '/', name: 'List Book'},
        { path: '/add', name: 'Add Book'},
    ]
  return (
    <header className='text-center mt-20 '>
        <h1 className=' text-4xl font-bold'>Book Management</h1>
        <nav className=' text-lg font-semibold flex justify-center mt-8'>
            {navigation.map((nav) => (
                <NavLink key={nav.name} to={nav.path} className=' p-4 px-8 border-black border hover:bg-black hover:text-white duration-300'>
                    {nav.name}
                </NavLink>
            ))}
        </nav>
    </header>
  )
}

export default Header