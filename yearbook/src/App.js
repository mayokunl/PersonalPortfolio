
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import './App.css';
import ScrollablePortfolio from "./components/ScrollablePortfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/scrollable" element={<ScrollablePortfolio />} />
      </Routes>
    </Router>
  );
}


export default App;
