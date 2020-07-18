import React, { useContext }  from 'react';
import { PwaContext } from '../../PwaContext';
import '../aboutMe/AboutMe.css'
import Testimonial from './Testimonial';

const AboutMe = () => {
    const [pwaData] = useContext(PwaContext)
    const about = pwaData?.aboutMe


      
    return (
        <div className="about-section section-shadow">
            <div className="section-top">
                <h1 className="section-title">{about?.aboutHeading}</h1>
                <p dangerouslySetInnerHTML={{ __html: about?.aboutDesc }}></p>
                <div className="my-skills">
                    <div className="row">
                        {about?.skills.map( (skill, index) => {
                            return(
                                <div key={index} className="col-lg-2 col-md-4 col-6">
                                    <img src={skill} alt="skill"/>
                                </div>
                            )
                        } )}
                    </div>
                </div>
            </div>
            
            <div className="section-bottom">
                <Testimonial/>
            </div>
            
        </div>
    );
};

export default AboutMe;