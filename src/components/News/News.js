import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './News.css';
const News = (props) => {
  /* console.log(props); */
    const { info,url ,title } = props.newsas   ;
    return (
        <div>
          
              <div  className="single-service">
              {/* card group added */}
            <CardGroup>
  <Card  className=" ">
    <Card.Img variant="top" src={url}  className="  p-5"  width="450" height="350" />
    <Card.Body>
      <Card.Title className="fs-2"> {title}   </Card.Title>
       
      < p className="text-start"> {info} </p>
      <div>
       <Button>   Detail</Button>  
      </div>
    </Card.Body>
      
    
    
      
    
  </Card>
  </CardGroup>
    </div>
        </div>
    );
};

export default News;