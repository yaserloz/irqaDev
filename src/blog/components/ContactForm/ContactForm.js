import React from 'react'
import './ContactForm.css'
const ContactForm = props => {
    return (
        <>
            <div className='contact-form-wrapper'>
                <div className='contact-form-title'>
                    <h1>Get in touch</h1>
                </div>
                <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </p>
                <form className='contact-form'>
                    <label>NAME</label>
                    <input className='text-field w-input' type='text' placeholder='Enter your name' />
                    <label>EMAIL ADDRESS</label>
                    <input className='text-field w-input' type='text' placeholder='Enter your email address' />
                    <label>MESSAGE</label>
                    <textarea className='text-field w-input' placeholder="Enter your message"></textarea>
                    <input className="button w-button" data-wait="Please wait..." type="submit" value="Submit"></input>
                </form>
            </div>
        </>
    )
}

export default ContactForm
