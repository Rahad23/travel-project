import React from 'react';
import { Link } from 'react-router-dom';
import './Sreemongol.css';

const Sreemongol = () => {
    return (
        <div className='sreemongolImg'>
        <div className='overlay'>
        <div className='flex justify-between items-center h-full container mx-auto'>
              <div className='text-left'>
              <h1 style={{fontFamily:"sans-serif"}} className='text-7xl font-bold  text-white'>Sreemangal</h1>
              <p className='text-[#ffffff] w-2/4 font-semibold mt-3'>Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress...</p>
              <Link to={'/bookingSreemongol'}>
              <button className="btn btn-active btn-secondary mt-3 ml-2">Booking-Now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </button>
              </Link>
              </div> 
            </div>
        </div>
        </div>
    );
};

export default Sreemongol;