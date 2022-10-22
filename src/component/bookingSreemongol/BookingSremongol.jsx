import React from 'react';
import BookingForm from '../bookingForm/BookingForm';

const BookingSremongol = () => {
    return (
        <div className='sreemongolImg'>
        <div className='overlay'>
        <div className='flex justify-center items-center h-full container mx-auto'>
              <div className='text-center'>
              <h1 style={{fontFamily:"sans-serif"}} className='text-7xl font-bold  text-white'>Sreemongol</h1>
              <p className='text-[#ffffff] w-3/4 font-semibold mt-3 mx-auto'>Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here. Only one tea research institute in Bangladesh which name is BTRI (Bangladesh Tea Research Institute) is situated in Sreemangal.</p>
              </div> 
              <div className=''>
                <BookingForm></BookingForm>
              </div>
            </div>
        </div>
        </div>
    );
};

export default BookingSremongol;