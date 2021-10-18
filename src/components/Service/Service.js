import React from 'react';
import {Button,CardGroup,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
/* service component */
const Service = (props) => {
    const {img,name,description,id} = props.service;
    const url = `/service/${id}`;
    return (
       
        <div>
            <div>
              {/* card group added */}
            <CardGroup >
  <Card  className=" ">
    <Card.Img variant="top" src={img} className="  p-5"  width="450" height="350" />
    <Card.Body>
      <Card.Title>  Name : {name}</Card.Title>
       
      <h4> {description}</h4>
      <div>
      <Link to={url} ><Button> Detail</Button> </Link>
      </div>
    </Card.Body>
      
    
    
      
    
  </Card>
  </CardGroup>
    </div>
            
        </div>
        
    );
};
/* exporting service component */
export default Service;