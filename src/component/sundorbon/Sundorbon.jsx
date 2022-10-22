import React from 'react';
import { Link } from 'react-router-dom';
import '../bookingSundorbon/BookingSundorbon.css';
const Sundorbon = () => {
    return (
        <div className='sundorbonImg'>
        <div className='overlay'>
        <div className='flex justify-between items-center h-full container mx-auto'>
              <div className='text-left'>
              <h1 style={{fontFamily:"sans-serif"}} className='text-7xl font-bold  text-white'>Sundorbon</h1>
              <p className='text-[#ffffff] w-2/4 font-semibold mt-3'>Despite preservation commitments from both governments, the Sundarbans are under threat from both natural and human-made causes. In 2007, the landfall of Cyclone Sidr damaged around 40% of the Sundarbans...</p>
              <Link to={'/SundorbonBooking'}>
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

export default Sundorbon;