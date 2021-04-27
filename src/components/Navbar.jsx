import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

//Accessing context using first method
class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav className='navbar' style={{ background: theme.navbg, color: theme.text }}>
                <h1 className='ml-1'>Booklist</h1>
                <div className='mr-1'>
                    <ul>
                        <li>About us</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

//Accessing context using second method
class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <nav className='navbar' style={{ background: theme.navbg, color: theme.text }}>
                            <h1 className='ml-1'>Booklist</h1>
                            <div className='mr-1'>
                                <ul>
                                    <li><ThemeToggle /></li>
                                    <li>About us</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </nav>
                    );
                }}
            </ThemeContext.Consumer>

        )
    }
}

export default Navbar;
