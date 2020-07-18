import React, { useContext } from 'react';
import { PwaContext } from '../../PwaContext';
import '../resume/Resume.css'

const Resume = () => {
    const [pwaData] = useContext(PwaContext)
    const resume = pwaData?.resume
    return (
        <div className="resume-area section-shadow">
            <h1 className="section-title mb-5">{resume?.resumeHeading}</h1>
                {
                    resume?.resumeSections.map( (resumeSection, index) => {
                        return(
                            <div key={index} className="resume-section">
                                <h3><i className={`fa ${resumeSection.resumeSectionIcon}`}></i>{resumeSection.resumeSectionTitle}</h3>
                                {resumeSection.resumeTimelines.map( (timeline, index) => {
                                    return(
                                        <div key={index} className="single-timeline-item">
                                            <span>{timeline.year}</span>
                                            <h4>{timeline.title}</h4>
                                            <h5>{timeline.subTitle}</h5>
                                            <p>{timeline.description}</p>
                                        </div>
                                    )
                                } )}
                            </div>
                        )
                    } )
                }
        </div>
    );
};

export default Resume;