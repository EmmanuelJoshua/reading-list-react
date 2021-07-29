import React, { Component } from 'react'
import './App.scss';
import Navbar from './components/Navbar';
import BookList from './components/Booklist'
import ThemeContextProvider from './contexts/ThemeContext';
import BookContextProvider from './contexts/BookContext';
import UserContextProvider from './contexts/UserContext';


class App extends Component {

  render() {
    return (
      <div className="app" >
        <ThemeContextProvider>
          <BookContextProvider>
            <UserContextProvider>
              <Navbar />
              <BookList />
            </UserContextProvider>
          </BookContextProvider>
        </ThemeContextProvider>
      </div>

    );
  }

}

export default App;
