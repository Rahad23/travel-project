import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardService from '../serviceCard/CardService';

const BookingPage = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='container mx-auto mt-20'>
           <div>
           {
                data.map((product, length)=> <CardService key={length} service={product}></CardService>)
            }
           </div>
           <div>
            
           </div>
        </div>
    );
};

export default BookingPage;