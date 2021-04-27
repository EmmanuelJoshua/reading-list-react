import React, { Component, createContext } from 'react'

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: false,
        dark: { navbg: '#171717', mainbg: '#989AA5', text: '#fff' },
        light: { navbg: '#989AA5', mainbg: '#fff', text: '#171717' },
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