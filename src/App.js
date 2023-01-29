import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  console.log(currentPage);
  function renderPage() {
    if (currentPage === 'About') {
      return <AboutMe />
    } else if (currentPage === 'Contact') {
      return <Contact />
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
  }
  return (
    <div className="App">
      <div className="content-container">
        <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        {renderPage()}
      </div>
      <footer className="footer--pin">
        <Footer />
      </footer>
    </div>
  );
}

export default App
