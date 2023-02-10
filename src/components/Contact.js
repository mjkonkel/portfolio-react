import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import './Contact.css'

export default function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setuserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
            setErrorMessage('');

            if (!validateEmail(email)) {
                setErrorMessage('Email is invalid');
                return;
            }
        } else if (inputType === 'userName') {
            setuserName(inputValue)
        } else {
            setMessage(inputValue)
        }

    };

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();


    //     if (userName === '') {
    //         setErrorMessage('Name is required');
    //         return;
    //     } else if (email === '') {
    //         setErrorMessage('Email is required');
    //         return;
    //     } else if (message === '') {
    //         setErrorMessage('Message is required');
    //         return;
    //     } else if (!validateEmail(email)) {
    //         setErrorMessage('Email is invalid');
    //         return;
    //     }
    //     setErrorMessage('');
    //     setuserName('');
    //     setEmail('');
    //     setMessage('');
    // }


    return (
        <>
            <div className="contact">
                <h1>Contact Me</h1>
                <form target="_blank" action="https://formsubmit.co/a27fb8d2d93ba67f6963dbdbc848c5b1" method="POST" >
                    <div>
                        <input
                            value={userName}
                            name="userName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            value={message}
                            name="message"
                            type="text"
                            placeholder="Message"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        {/* <button type="submit" onClick={handleFormSubmit}>Submit</button> */}
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {/* {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )} */}
            </div>
        </>
    );
}
