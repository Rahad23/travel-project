import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TimePicker } from 'react-ios-time-picker';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingForm = () => {

    const [value, setValue] = useState('10:00');
    const [values, onChanges] = useState(new Date());

    const onChange = (timeValue) => {
        setValue(timeValue);
     }
     const onChangeDate =(dateValue)=>{
        onChanges(dateValue);
     }
    return (
        <div className='my-auto'>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
    </div>
    <div className="card flex-shrink-0 w-[400px] h-[400px] max-w-sm shadow-2xl bg-base-100">
      <div className="card-body overflow-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Origin</span>
          </label>
          <input type="text" placeholder="Origin" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Destination</span>
          </label>
          <input type="text" placeholder="Destination" className="input input-bordered" required />
            {/* calendar set */}
            <div className='mt-4'>
              <div>
                <label htmlFor="time">Select Time</label>
               <TimePicker id='time' onChange={onChange} value={value} className='w-full text-right' />
              </div>
            <div className='mt-2'>
                <Calendar onChange={onChangeDate} value={values} />
        </div>
            </div>
        </div>
        <div className="mt-6">
          <Link to={'/booking'} className="w-full">
          <button className="btn border-none text-black font-semibold w-full" style={{backgroundColor:"rgba(249, 165, 26, 1)"}}>Start Booking</button>
          </Link>
          
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingForm;