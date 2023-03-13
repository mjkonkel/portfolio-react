import './NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav>
            <div>
            <h1>Mitchell Konkel</h1>
            </div>
            <div>
            <Link to="/home">
            <b>Home</b>
            </Link>
            <Link to="/about">
            <b>About Me</b>
            </Link>
            <Link to="/contact">
            <b>Contact Me</b>
            </Link>
            <Link to="/portfolio">
            <b>Portfolio</b>
            </Link>
            <Link to="/resume">
            <b>Resume</b>
            </Link>
            </div>
        </nav>
    )
}

// export default function NavBar(props) {
//     return (
//         <nav>
//             <div>
//             <h1>Mitchell Konkel</h1>
//             </div>
//             <div>
//             <a href="#about" onClick={() => props.setCurrentPage('About')} 
//             className={props.currentPage === 'About' ? 'active' : 'nav-link'}
//             >About Me</a>
//             <a href="#contact" onClick={() => props.setCurrentPage('Contact')}
//             className={props.currentPage === 'Contact' ? 'active' : 'nav-link'}
//             >Contact</a>
//             <a href="#portfolio" onClick={() => props.setCurrentPage('Portfolio')}
//             className={props.currentPage === 'Portfolio' ? 'active' : 'nav-link'}
//             >Portfolio</a>
//             <a href="#resume" onClick={() => props.setCurrentPage('Resume')}
//             className={props.currentPage === 'Resume' ? 'active' : 'nav-link'}
//             >Resume</a>
//             </div>
//         </nav>
//     )
// }
