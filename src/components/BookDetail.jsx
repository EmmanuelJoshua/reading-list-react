import React, { useContext } from 'react'
import { Book, X } from 'react-feather'
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
    const { booksDispatch } = useContext(BookContext);
    return (
        <div className='bookdetails'>
            <div className='cancel'>
                <X className='cancel-icon' onClick={() => booksDispatch({ type: 'DELETE_BOOk', id: book.id })} />
            </div>

            <Book className='book-icon' />
            <h2>
                {book.author}
            </h2>
            <p>
                {book.title}
            </p>
        </div>
    );
}

export default BookDetails;