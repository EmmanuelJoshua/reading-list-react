import React, { Component } from 'react'
import { Moon, Sun } from 'react-feather'
import { ThemeContext } from '../contexts/ThemeContext'

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, toggleTheme } = this.context;
        return (
            <div>
                {
                    isLightTheme ? <Sun className='theme-toggle' onClick={toggleTheme} /> : <Moon className='theme-toggle' onClick={toggleTheme} />
                }
            </div>
        );
    }
}

export default ThemeToggle;