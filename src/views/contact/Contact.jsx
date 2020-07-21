import React from 'react'

export default function Contact() {
    return (
        <div className="contact">
            
                <form action="#">
                    <h2>Send us a message </h2>
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
