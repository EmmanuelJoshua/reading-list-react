import './App.scss';
import Navbar from './components/Navbar';
import BookList from './components/Booklist'
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>

  );
}

export default App;
