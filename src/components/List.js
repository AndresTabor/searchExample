import React, { useEffect, useState } from 'react';

import Cards from './Cards';



const List = ({datos}) => {
    const [data, setData] = useState([]);

   


    useEffect(() => {
        setData(datos)
        
    }, [datos]);
    

  return <>
    <div>
        
        {
            data.map(movie => (
                <Cards id={movie.id} img={movie.image} name={movie.name} key={movie.id}/>
            ) )
        }

        
    </div>
  </>;
};

export default List;
