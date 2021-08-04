import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetail';
import AddBook from './AddBook';
import AddBookModal from './AddBookModal';
import SetUsernameModal from './SetUsernameModal';

//Accessing context using first method
// class Booklist extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className='booklist' style={{ background: theme.mainbg, color: theme.text }}>

//             </div>
//         )
//     }
// }


//Accessing context using second method
// class Booklist extends Component {
//     static contextType = ThemeContext;
//     render() {
//         return (
//             <ThemeContext.Consumer>
//                 {(context) => {
//                     const { isLightTheme, light, dark } = context;
//                     const theme = isLightTheme ? light : dark;
//                     return (
// <div className='booklist' style={{ background: theme.mainbg, color: theme.text }}>
//     <BookDetails />
// </div>
//                     );
//                 }}
//             </ThemeContext.Consumer>

//         )
//     }
// }

const Booklist = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books, booksModalDispatch } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;

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
            <div className='booklist' style={{ color: theme.text }}>
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
