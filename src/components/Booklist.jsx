import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetail';
import AddBook from './AddBook';
import AddBookModal from './AddBookModal';
import SetUsernameModal from './SetUsernameModal';

const Booklist = () => {
    const { books, booksModalDispatch } = useContext(BookContext);

    const openModal = () => {
        booksModalDispatch({
            type:
                'OPEN_MODAL'
        })
    }

    return <div>
        <SetUsernameModal />
        <AddBookModal />
        {books.length ? (
            <div className='booklist'>
                {
                    books.map(book => {
                        return (<BookDetails book={book} key={book.id} />)
                    })
                }

                <AddBook openModal={openModal} />
            </div>
        ) : (
            <div className='empty-booklist' > <AddBook openModal={openModal} /> </div>
        )}

    </div>
}

export default Booklist;
