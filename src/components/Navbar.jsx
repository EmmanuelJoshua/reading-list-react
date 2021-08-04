import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {

    const { books } = useContext(BookContext);
    const { user } = useContext(UserContext);

    return (
        <nav className='navbar'>
            <h1 className='ml-1'> {!user ? 'Your reading list' : `${user}'s reading list`}</h1>

            <div className='mr-1'>
                <ul>
                    <li>You have {books.length} books to read</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
