

export default function NavBar(props) {
    return (
        <nav>
                <a href="#about" onClick={()=> props.setCurrentPage('About')}>About Me</a>
                <a href="#contact" onClick={()=> props.setCurrentPage('Contact')}>Contact</a>
                <a href="#portfolio" onClick={()=> props.setCurrentPage('Portfolio')}>Portfolio</a>
                <a href="#">Resume</a>
        </nav>
    )
}
