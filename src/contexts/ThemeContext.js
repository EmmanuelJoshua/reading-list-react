import React, { Component, createContext } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: false,
        dark: { navbg: '#010f1a', mainbg: '#071622', text: '#fff' },
        light: { navbg: '#E7F6FC', mainbg: '#fff', text: '#171717' },
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );

    }
}

export default ThemeContextProvider;