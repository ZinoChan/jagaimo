import React from 'react'
import { displayActionMessage } from '../../helpers/utils';

export default function Contact() {

    const handleSubmit = e => {
        e.preventDefault();
        displayActionMessage('Thank You We Will contact you back soon', 'success');
    } 

    return (
        <div className="contact">
            
                <form onSubmit={handleSubmit}>
                    <h2>Contact Us </h2>
                   <div className="form-control">
                       <label>Full Name</label>
                       <input type="text" name="fullname" placeholder="Enter Your Fullname"/>
                   </div>
                   <div className="form-control">
                       <label>Email</label>
                       <input type="email" name="email" placeholder="Enter Your Email"/>
                   </div>
                   <div className="form-control">
                       <label>Message</label>
                       <textarea name="message" ></textarea>
                   </div>
                   <button type="submit">Send </button>
                </form>
        </div>
    )
}
