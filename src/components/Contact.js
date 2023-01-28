import React from "react";

function Contact() {

    return (
        <>
            <h1>Contact</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type='text'></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text'></input>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea type='text'></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );

}

export default Contact