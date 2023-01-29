import React from "react";
import gitPic from "../assets/github-mark.png"

export default function Portfolio() {

    return (
        <div className="wrapper">

            <div className="project">
                <h2>The Bird Spotter</h2>
                <a href='https://github.com/mjkonkel/bird-tracker'>
                    <img className='gitPic' src={gitPic} alt='GitHub icon'/>
                </a>
                <a href="https://mjkonkel.github.io/bird-tracker/">
                    <section>
                        <figure className="figure-bird"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <h2>Webblog</h2>
                <a href='https://github.com/mjkonkel/tech-blog'>
                    <img className='gitPic' src={gitPic} alt='GitHub icon'/>
                </a>
                <a href="https://techblogblog.herokuapp.com/">
                    <section>
                        <figure className="figure-blog"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <h2>5-Day Forecast</h2>
                <a href='https://github.com/mjkonkel/weather-forecast'>
                    <img className='gitPic' src={gitPic} alt='GitHub icon'/>
                </a>
                <a href="https://mjkonkel.github.io/weather-forecast/">
                    <section>
                        <figure className="figure-weather"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <h2>Work Day Scheduler</h2>
                <a href='https://github.com/mjkonkel/C5-work-day-scheduler'>
                    <img className='gitPic' src={gitPic} alt='GitHub icon'/>
                </a>
                <a href="https://mjkonkel.github.io/C5-work-day-scheduler/">
                    <section>
                        <figure className="figure-work"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <h2>Just Another Text Editor</h2>
                <a href='https://github.com/mjkonkel/jate-editor'>
                    <img className='gitPic' src={gitPic} alt='GitHub icon'/>
                </a>
                <a href="https://sleepy-bayou-08147.herokuapp.com/">
                    <section>
                        <figure className="figure-jate"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <h2>Password Generator</h2>
                <a href='https://github.com/mjkonkel/C3-password'>
                    <img className='gitPic' src={gitPic} alt='GitHub icon'/>
                </a>
                <a href="https://mjkonkel.github.io/C3-password/">
                    <section>
                        <figure className="figure-password"></figure>
                    </section>
                </a>
            </div>

        </div>
    )

}