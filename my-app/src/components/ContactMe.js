import React from 'react'

function ContactMe() {
return (
    <div className='contact-container'>
        <h1>Contact Me</h1>
        <form className='form'>
            <div>
                <label>Email</label>
                <input type="email"/>
            </div>
            <div>
                <label>Message</label>
                <textarea/>
            </div>
            <button className='form-btn btn'>Submit</button>
        </form>
    </div>
)
}

export default ContactMe