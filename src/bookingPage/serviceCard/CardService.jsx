import React from 'react';

const CardService = ({service}) => {
    console.log(service);
    const {img, kitchen, price, rating,room, time, title, totalAmount, totalRating, fexibility }=service;
    return (
        <div>
        <div className="card card-side w-[60%] bg-base-100 shadow-xl mb-7">
        <figure><img src={img} alt="Movie" className='w-[400px]'/></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
           <div>
           <p className='mb-[0.5px] text-[#a8a7a2] text-sm'>{room}</p>
            <p className='mb-[0.5px] text-[#318a2e] text-sm'>{kitchen}</p>
            <p className='mb-[0.5px] text-[#0c0c0c]'>{fexibility}</p>
           </div>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Booking</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default CardService;