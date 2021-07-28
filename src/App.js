import './App.scss';
import Navbar from './components/Navbar';
import BookList from './components/Booklist'
import ThemeContextProvider from './contexts/ThemeContext';
import BookContextProvider from './contexts/BookContext';

function App() {


  return (
    <div className="app">
      <ThemeContextProvider>
        <BookContextProvider>
          <Navbar />
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>
    </div>

  );
}

export default App;
