// import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/*"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<AboutMe />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/resume"
            element={<Resume />}
          />
        </Routes>
        <Footer />
      </div>

    </Router>
  )
}


// function App() {
//   const [currentPage, setCurrentPage] = useState('About');

//   console.log(currentPage);
//   function renderPage() {
//     if (currentPage === 'About') {
//       return <AboutMe />
//     } else if (currentPage === 'Contact') {
//       return <Contact />
//     } else if (currentPage === 'Portfolio') {
//       return <Portfolio />
//     } else {
//       return <Resume />
//     }
//   }
//   return (
//     <div className="App">
//       <div className="content-container">
//         <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage}/>
//         {renderPage()}
//       </div>
//       <footer className="footer--pin">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

export default App
