import React, { useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState(() => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

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

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{ books, show, addBook, removeBooks, openModal, closeModal }}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider;