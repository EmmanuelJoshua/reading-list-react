import React, { useState, useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { BookContext } from '../contexts/BookContext';
import { Book, X } from 'react-feather'
import ReactDOM from 'react-dom';

const Modal = ({ show, closeModal }) => {

    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }

    return ReactDOM.createPortal(
        <CSSTransition
            in={show}
            unmountOnExit
            timeout={{ enter: 0, exit: 300 }}
        >
            <div className='modal' onClick={() => closeModal()}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <div className='book'>
                            <Book className='book-icon' />
                        </div>
                        <h4 className='modal-title'>Add book</h4>
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

export default Modal;