import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        setEmail('');
    }


    return (
        <div>
            <h1>Contact</h1>
            <form>
                <div>
                    <input
                        name="userName"
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
    );
}
