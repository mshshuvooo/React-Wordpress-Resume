import React, { useContext }  from 'react';
import { PwaContext } from '../../PwaContext';
import '../contact/Contact.css'
import ContactForm from './ContactForm';

const Contact = () => {
    const [pwaData] = useContext(PwaContext)
    const contact = pwaData?.contact
    return (
        <div className="contact-section section-shadow">
            <div className="section-top">
                <h1 className="section-title">{contact?.contactHeadding}</h1>
                <ContactForm/>
            </div>
            <div className="section-bottom">
                <div className="row">
                    {
                        contact?.contactInfos.map( (contactInfo, index) => {
                            return(
                                <div key={index} className="col-lg-6">
                                    <div className="single-contact-info">
                                        <i className={`fa ${contactInfo.icon}`} ></i>
                                        <p>{contactInfo.text}</p>
                                    </div>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>
        </div>
    );
};

export default Contact;