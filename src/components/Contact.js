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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        

        if (userName === '') {
            setErrorMessage('Name is required');
            return;
        } else if (message === ''){
            setErrorMessage('Message is required');
            return;
        }
        setErrorMessage('');
        setEmail('');
        setuserName('');
        setMessage('');
    }


    return (
        <>
        <div className="contact">
            <h1>Contact</h1>
            <form>
                <div>
                    <input
                        value={userName}
                        name="userName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                    />
                </div>
                <div>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        type="text"
                        placeholder="Message"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit" onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
        </>
    );
}
