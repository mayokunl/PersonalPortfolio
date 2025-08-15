
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import './App.css';
import ScrollablePortfolio from "./components/ScrollablePortfolio";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/scrollable" element={<ScrollablePortfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}


export default App;
