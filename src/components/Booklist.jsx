import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

//Accessing context using first method
class Booklist extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className='booklist' style={{ background: theme.mainbg, color: theme.text }}>

            </div>
        )
    }
}


//Accessing context using second method
class Booklist extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <div className='booklist' style={{ background: theme.mainbg, color: theme.text }}>

                        </div>
                    );
                }}
            </ThemeContext.Consumer>

        )
    }
}

export default Booklist;
