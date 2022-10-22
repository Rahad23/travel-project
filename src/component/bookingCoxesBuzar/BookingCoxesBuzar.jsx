import React from 'react';
import BookingForm from '../bookingForm/BookingForm';


const BookingCoxesBuzar = () => {
    return (
        <div className='coxes'>
        <div className='overlay'>
        <div className='flex justify-center items-center h-full container mx-auto'>
              <div className='text-center'>
              <h1 style={{fontFamily:"sans-serif"}} className='text-7xl font-bold  text-white'>Cox's bazar</h1>
              <p className='text-[#ffffff] w-3/4 font-semibold mt-3 mx-auto'>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
              </div> 
              <div className=''>
                <BookingForm></BookingForm>
              </div>
            </div>
        </div>
        </div>
    );
};

export default BookingCoxesBuzar;