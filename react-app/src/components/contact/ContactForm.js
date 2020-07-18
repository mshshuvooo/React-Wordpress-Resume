import React, { useState } from 'react';
import axios from 'axios'
import sendingGif from '../../images/sending.gif'

const ContactForm = () => {
    
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setloading] = useState(false);
    const [mailStatus, setMailStatus] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    let successMessageColor
    if (mailStatus === "mail_sent") {
        successMessageColor = '#0f9d59'
    }else{
        successMessageColor = '#e82a5e'
    }
    

    
    
    const onFormSubmit = (event) => {
        event.preventDefault()
            const siteURL = 'https://example.com'
            let formData = new FormData()
    
            formData.set("senderName", senderName)
            formData.set("senderEmail", senderEmail)
            formData.set("subject", subject)
            formData.set("message", message)
            setloading(true)
         
        
                
            axios.post(`${siteURL}/wp-json/contact-form-7/v1/contact-forms/2999/feedback`,
                formData,{
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                }
            )

            .then( res => {
                setSuccessMessage(res.data.message);
                setMailStatus(res.data.status)
                setSenderName('')
                setSenderEmail('')
                setSubject('')
                setMessage('')
                setloading(false)

                console.log(res.data)
            })
            

            .catch( err => {
                console.log(err.message);
                setloading(false);          
            })

        }

    

    return (
        <div className="resumx-contact-form mt-3">
            <form onSubmit={onFormSubmit}>
                <input
                    required
                    placeholder="Your Name"
                    type='text'
                    name='senderName'
                    value={senderName}
                    className="sender-name"
                    onChange={event => setSenderName(event.target.value)}>
                </input>

                <input 
                    required
                    placeholder="Your Email"
                    type='email'
                    name='senderEmail'
                    value={senderEmail}
                    className="sender-email"
                    onChange={event => setSenderEmail(event.target.value)}>
                </input>

                <input 
                    required
                    placeholder="Subject"
                    type='text'
                    name='subject'
                    value={subject}
                    onChange={event => setSubject(event.target.value)}>
                </input>
                    
                <textarea
                    required
                    placeholder="Your Message" 
                    type='textarea'
                    name='message'
                    value={message} 
                    onChange={event => setMessage(event.target.value)}
                    rows="3">
                </textarea>

                

                <button className="boxed-btn" type='submit'>Send Message</button>
            </form>
                {
                    loading && 
                    <div className="mail-sending">
                        <img src={sendingGif} alt="Sending"/>
                    </div>
                }
                <h4 style={{color: successMessageColor}} className="mail-success-message">{successMessage}</h4>
                
        </div>
    );
};

export default ContactForm;