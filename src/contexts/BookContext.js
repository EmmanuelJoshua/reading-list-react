import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'name of the wind', author: 'patrick rothfuss', 'id': 1 },
        { title: 'the final empire', author: 'brandon sanderson', 'id': 2 }
    ]);

    const [show, setShow] = useState(false);

    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuidv4() }]);
        closeModal();
    }

    const removeBooks = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    const openModal = () => {
        setShow(true)
    }

    const closeModal = () => {
        setShow(false);
    }

    return (
        <BookContext.Provider value={{ books, show, addBook, removeBooks, openModal, closeModal }}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider;