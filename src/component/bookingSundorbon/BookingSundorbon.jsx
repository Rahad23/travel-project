import React from 'react';
import BookingForm from '../bookingForm/BookingForm';
import './BookingSundorbon.css';
const BookingSundorbon = () => {
    return (
        <div className='sundorbonImg'>
            <div className='overlay'>
        <div className='flex justify-center items-center h-full container mx-auto'>
              <div className='text-center'>
              <h1 style={{fontFamily:"sans-serif"}} className='text-7xl font-bold  text-white'>Sundorbon</h1>
              <p className='text-[#ffffff] w-3/4 font-semibold mt-3 mx-auto'>Despite preservation commitments from both governments, the Sundarbans are under threat from both natural and human-made causes. In 2007, the landfall of Cyclone Sidr damaged around 40% of the Sundarbans. The forest is also suffering from increased salinity due to rising sea levels due to climate change and reduced freshwater supply. In May 2009 Cyclone Aila devastated the Sundarbans with massive casualties. </p>
              </div> 
              <div className=''>
                <BookingForm></BookingForm>
              </div>
            </div>
        </div>
        </div>
    );
};

export default BookingSundorbon;