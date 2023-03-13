import './NavBar.css'
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav>
            <div>
                <h1>Mitchell Konkel</h1>
            </div>
            <div>
                <NavLink to="/home" className="nav-link">
                    <b>Home</b>
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    <b>About</b>
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    <b>Contact</b>
                </NavLink>
                <NavLink to="/portfolio" className="nav-link">
                    <b>Portfolio</b>
                </NavLink>
                <NavLink to="/resume" className="nav-link">
                    <b>Resume</b>
                </NavLink>
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
