import resumePDF from '../assets/sample-resume.pdf'
import './Resume.css'

export default function Resume() {

    return (
        <div className="resume">
            <h1>Resume</h1>
            <a href={resumePDF} target="_blank" rel="noreferrer noopener"><button>Download my Resume</button></a>
            
            <h2>My Skills</h2>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </ul>
        </div>
    );

}