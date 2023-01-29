import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe  from './components/AboutMe';
import Contact  from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  console.log(currentPage);
  function renderPage(){
    if(currentPage === 'About'){
      return <AboutMe />
    } else if(currentPage === 'Contact'){
      return <Contact />
    } else if (currentPage === 'Portfolio'){
      return <Portfolio />
    }
  }
  return (
    <div className="App">
     <NavBar setCurrentPage={setCurrentPage} />
     {renderPage()}
    </div>
  );
}

export default App
