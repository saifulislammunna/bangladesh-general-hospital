import React from 'react';
import {Button,CardGroup,Card} from 'react-bootstrap';
import './Service.css'
/* service component */
const Service = (props) => {
    const {img,name,price} = props.service
    return (
       
        <div>
            <div>
              {/* card group added */}
            <CardGroup >
  <Card  className=" ">
    <Card.Img variant="top" src={img} className="  p-5"  width="450" height="350" />
    <Card.Body>
      <Card.Title>Course Name : {name}</Card.Title>
       
      <h4> {price}</h4>
      <Button>Enroll Now</Button> 
    </Card.Body>
      
    
    
      
    
  </Card>
  </CardGroup>
    </div>
            
        </div>
        
    );
};
/* exporting service component */
export default Service;