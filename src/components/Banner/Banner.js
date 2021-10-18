import React, { useEffect, useRef }  from 'react';
import './Banner.css';
import img from '../../images/doctor-with-co-workers-analyzing-x-ray-removebg-preview.png';
import { init } from 'ityped';
import { Button } from 'react-bootstrap';

const Banner = () => {

    const textRef = useRef();
    useEffect(() => {

        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 70,
             strings: [' Safe Care.']
        })
    })

    



    return (
         

            <div className="background-image flexible-container d-flex">
                <div className="left-container  half-width p-5">
                     <div className="text-container">
                         <h1 className="fs-1 fw-bold banner-text  " >Your Doctors, <br />
                         Your treatment.</h1>
                         <h3 className="text-animation fs-1 banner-text"> <span  ref={textRef}></span></h3>

                         <Button className="btn-primary">Discover More</Button>
                     </div>
                </div>
                <div className="right-container half-width ">
                     <div className="img-container ">
                         <img src= {img} alt="" />
                     </div>
                </div>
            </div>

          
            
              
                  
                
                
              
                   
             
                
              
         
        
    );
};

export default Banner;