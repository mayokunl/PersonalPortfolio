import React from 'react';
import Book from './components/Book';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Book />
    </BrowserRouter>
  ); // ✅ this closing parenthesis was missing
}

export default App;
