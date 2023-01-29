import gitPic from "../assets/github-mark.png"
import linkPic from "../assets/LI-In-Bug.png"


export default function Footer() {

    return (
        <div>
            <a href='https://github.com/mjkonkel' className="footer">
                <img className='gitPic' src={gitPic} alt='GitHub icon' />
            </a>
            <a href='https://www.linkedin.com/in/mitchell-konkel?trk=profile-badge' className="footer">
                <img className='gitPic' src={linkPic} alt='LinkedIn icon' />
            </a>
        </div>
    )

}