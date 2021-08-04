import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import { UserContext } from '../contexts/UserContext';
// import ThemeToggle from './ThemeToggle';

//Accessing context using first method
// class Navbar extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <nav className='navbar' style={{ background: theme.navbg, color: theme.text }}>
//                 <h1 className='ml-1'>Booklist</h1>
//                 <div className='mr-1'>
//                     <ul>
//                         <li>About us</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//             </nav>
//         )
//     }
// }


//Accessing context using second method
// class Navbar extends Component {
//     static contextType = ThemeContext;
//     render() {
//         return (
//             <ThemeContext.Consumer>
//                 {(context) => {
//                     const { isLightTheme, light, dark } = context;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                         <nav className='navbar' style={{ background: theme.navbg, color: theme.text }}>
//                             <h1 className='ml-1'>Joshua's reading list</h1>
//                             <div className='mr-1'>
//                                 <ul>
//                                     <li></li>
//                                     <li><ThemeToggle /></li>
//                                 </ul>
//                             </div>
//                         </nav>
//                     );
//                 }}
//             </ThemeContext.Consumer>
//         )
//     }
// }

//Accessing context using functional components
const Navbar = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const { user } = useContext(UserContext);
    const theme = isLightTheme ? light : dark;

    return (
        <nav className='navbar' style={{ background: theme.navbg, color: theme.text }}>
            <h1 className='ml-1'> {!user ? 'Your reading list' : `${user}'s reading list`}</h1>

            <div className='mr-1'>
                <ul>
                    <li>You have {books.length} books to read</li>
                    {/* <li><ThemeToggle /></li> */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
