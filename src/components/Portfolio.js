import React from "react";
import gitPic from "../assets/github-mark.png"
import './Portfolio.css'

export default function Portfolio() {

    return (
        <div>
            <h1 className="project-header">My Projects</h1>
<div className="wrapper">


            <div className="project">
                <h2>The Bird Spotter</h2>
                <a href='https://github.com/mjkonkel/bird-tracker' target="_blank" rel="noreferrer noopener">
                    <img className='gitPic' src={gitPic} alt='GitHub icon'/>
                </a>
                <a href="https://mjkonkel.github.io/bird-tracker/" target="_blank" rel="noreferrer noopener">
                    <section>
                        <figure className="figure-bird"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <h2>Webblog</h2>
                <a href='https://github.com/mjkonkel/tech-blog' target="_blank" rel="noreferrer noopener">
                    <img className='gitPic' src={gitPic} alt='GitHub icon'/>
                </a>
                <a href="https://techblogblog.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                    <section>
                        <figure className="figure-blog"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <h2>5-Day Forecast</h2>
                <a href='https://github.com/mjkonkel/weather-forecast' target="_blank" rel="noreferrer noopener">
                    <img className='gitPic' src={gitPic} alt='GitHub icon'/>
                </a>
                <a href="https://mjkonkel.github.io/weather-forecast/" target="_blank" rel="noreferrer noopener">
                    <section>
                        <figure className="figure-weather"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <h2>Power Trip</h2>
                <a href='https://github.com/nambui17/Power-Trip' target="_blank" rel="noreferrer noopener">
                    <img className='gitPic' src={gitPic} alt='GitHub icon'/>
                </a>
                <a href="https://power-trip.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                    <section>
                        <figure className="figure-work"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <h2>Just Another Text Editor</h2>
                <a href='https://github.com/mjkonkel/jate-editor' target="_blank" rel="noreferrer noopener">
                    <img className='gitPic' src={gitPic} alt='GitHub icon'/>
                </a>
                <a href="https://sleepy-bayou-08147.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                    <section>
                        <figure className="figure-jate"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <h2>Helping Hands</h2>
                <a href='https://github.com/mjkonkel/helping-hands' target="_blank" rel="noreferrer noopener">
                    <img className='gitPic' src={gitPic} alt='GitHub icon' target="_blank" rel="noreferrer noopener"/>
                </a>
                <a href="https://helping-hands.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                    <section>
                        <figure className="figure-password"></figure>
                    </section>
                </a>
            </div>

        </div>
        </div>
        
    )

}