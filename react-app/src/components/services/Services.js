import React, { useContext } from 'react';
import { PwaContext } from '../../PwaContext';
import '../services/Services.css'

const Services = () => {
    const [pwaData] = useContext(PwaContext)
    const service = pwaData?.service
    return (
        <div className="services-area section-shadow">
            <h1 className="section-title mb-5">{service?.servicesHeading}</h1>
                <div className="row">
                    {
                    service?.ServiceItems.map( (serviceItem, index) => {
                        return(
                                <div className="col-lg-6">
                                    <div className="single-service-item">
                                        <img src={serviceItem.serviceIcon} alt="service"/>
                                        <h3>{serviceItem.serviceTitle}</h3>
                                    </div>
                                </div>
                        )
                    } )
                    }
            </div>
        </div>
    );
};

export default Services;