import React, { useReducer, createContext, useEffect } from 'react';
import { AddBookModalReducer } from '../reducers/AddBookModalReducer';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, booksDispatch] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    const [showAddBooksModal, booksModalDispatch] = useReducer(AddBookModalReducer, false);

    return (
        <BookContext.Provider value={{ books, showAddBooksModal, booksDispatch, booksModalDispatch }}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider;