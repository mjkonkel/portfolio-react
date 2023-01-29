import React from "react";
import profilePic from "../assets/IMG_3833.JPG"

function AboutMe() {

    return (
        <div>
            <h1>About Me</h1>
            <img src={profilePic} alt='profile pic' className='profilePic' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Faucibus scelerisque eleifend donec pretium. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum.</p>
        </div>
    );

}

export default AboutMe;