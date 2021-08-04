import React, { Component } from 'react'
import './App.scss';
import Navbar from './components/Navbar';
import BookList from './components/Booklist'
import BookContextProvider from './contexts/BookContext';
import UserContextProvider from './contexts/UserContext';


class App extends Component {

  render() {
    return (
      <div className="app" >
        <BookContextProvider>
          <UserContextProvider>
            <Navbar />
            <BookList />
          </UserContextProvider>
        </BookContextProvider>
      </div>

    );
  }

}

export default App;
