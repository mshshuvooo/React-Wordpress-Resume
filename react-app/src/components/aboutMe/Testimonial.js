import React, { useContext }  from 'react';
import { PwaContext } from '../../PwaContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Testimonial = () => {
    const [pwaData] = useContext(PwaContext)
    const about = pwaData?.aboutMe
    

    const SampleNextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <i className="fa fa-angle-left"></i>
            </div>
        );
      }
      
      const SamplePrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick} >
                <i className="fa fa-angle-right"></i>
            </div>
        );
      }


      const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        customPaging: () => (
            <div ></div>
          )
        
      };

    return (
        <div className="resumx-testimonial">
            <h1 className="section-title">{about?.testimonialHeading}</h1>
            <Slider {...testimonialSettings}>
                {
                    about?.testimonials.map( (testimonail, index) => {
                    return(
                        <div key={index} className="single-testimonial-item">
                            <img src={testimonail.authorImage} alt="author"/>
                            <p>{testimonail.authorComment}</p>
                            <h4>{testimonail.authorName}</h4>
                            <span>{testimonail.authorWorkPlace}</span>
                        </div>
                        )
                    } )  
                }
            </Slider>
        </div>
    );
};

export default Testimonial;