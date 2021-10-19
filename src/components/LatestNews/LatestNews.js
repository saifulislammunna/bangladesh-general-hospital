import React, { useEffect, useState } from 'react';
import News from '../News/News';
 
/* latest news component */
const LatestNews = () => {
    const [ news, setNews] = useState([]);
     
    useEffect(()=>{
      fetch(`https://raw.githubusercontent.com/saifulislammunna/news-api/main/latestnews.json`)
      .then(res => res.json())
      .then(data => 
       /*  console.log(data) */
        setNews(data));
    },[])
    return (
        <div >
             
            <h1 className="text-strat">latest News:</h1>
            
               <div className="service-container p-5">
               {
                news.map( newsas =>  <News
                  newsas = {newsas}
                  key ={newsas.name}


                >

                </News>
                     
                 )
            }
               </div>
        </div>
    );
};

export default LatestNews;