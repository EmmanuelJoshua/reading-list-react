import React, { useState, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { BookContext } from '../contexts/BookContext';
import { Book, X } from 'react-feather'
import ReactDOM from 'react-dom';

const AddBookModal = () => {

    const { showAddBooksModal, booksDispatch, booksModalDispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const closeModal = () => {
        booksModalDispatch({ type: 'CLOSE_MODAL' })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        booksDispatch({
            type: 'ADD_BOOK', book: {
                title, author
            }
        });
        setTitle('');
        setAuthor('');
        closeModal();
    }



    return ReactDOM.createPortal(
        <CSSTransition
            in={showAddBooksModal}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className='modal' onClick={() => closeModal()}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <div className='book'>
                            <Book className='book-icon' />
                        </div>
                        <h4 className='modal-title'>Add a book</h4>
                        <div className='cancel'>
                            <X className='cancel-icon' onClick={() => closeModal()} />
                        </div>
                    </div>

                    <div className='modal-body'>
                        <form id='modal-form' onSubmit={handleSubmit}>
                            <input type='text' placeholder='Book title' value={title}
                                onChange={(e) => setTitle(e.target.value)} required className='modal-input' />
                            <input type='text' placeholder='Book Author' value={author}
                                onChange={(e) => setAuthor(e.target.value)} required className='modal-input' />
                        </form>
                    </div>

                    <div className='modal-footer'>
                        <input form='modal-form' type='submit' value='Add book' className='modal-submit' />
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById('root')
    )
}

export default AddBookModal;