import { v4 as uuidv4 } from 'uuid';

export const BookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuidv4()
            }]
        case 'DELETE_BOOk':
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
}