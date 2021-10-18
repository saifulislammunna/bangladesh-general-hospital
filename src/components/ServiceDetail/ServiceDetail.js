 
import React, { useEffect, useState } from 'react';
import { Button , Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const { id} = useParams();
    const [service,setService] = useState( []);
    // console.log(params);
    useEffect(()=>{
       
        fetch(`https://raw.githubusercontent.com/saifulislammunna/service-api/main/service.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const selected = data.find ( s => s.id == id)
               console.log(selected) 
               
               setService(selected);
        });
    },[])
    return (
        <div>
                 {/* card group added */}
                 <CardGroup>
  <Card  className=" ">
    <Card.Img variant="top" src={service.img} className="  p-5"  width="450" height="350" />
    <Card.Body>
      <Card.Title>  Name : {service.name}</Card.Title>
       
      <h4> {service.description}</h4>
      <div>
      <Link to="/home"  ><Button> Detail</Button> </Link>
      </div>
    </Card.Body>
    </Card>
  </CardGroup>
     
        </div>
    );
};

export default ServiceDetail;
 