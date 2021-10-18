import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Home = () => {
    const [ services, setServices] = useState([]);
     
    useEffect(()=>{
      fetch(`./service.json`)
      .then(res => res.json())
      .then(data => setServices(data));
    },[])
    return (
        <div>
             {
               services.map( service => <Service
                service ={service}
                key ={service.name}
              
               >

               </Service>)
             }

        </div>
    );
};

export default Home;