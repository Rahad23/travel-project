import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../../../images/icons/logo.png';
import { FaSearch } from 'react-icons/fa';
import './Header.css';
import { provideApi } from './../../../setContextApi/SetContext';
import { toast } from 'react-toastify';
const Header = () => {
  const {userData, userLogOut}=useContext(provideApi);
  // console.log(userData);
  const navigate = useNavigate();
  const logout=()=>{
    userLogOut()
    .then(() => {
      toast.info('LogOut SuccessFull')
      navigate('/login');
    }).catch((error) => {
      toast.error('Logout Fail, Try agin');
    });
  }
    return (
        <div className='bg-[#e3e8e4] sticky top-0 z-50'>
            <div className="navbar container mx-auto justify-between">
  <div className="flex">
    <Link to={'/'} className="normal-case text-xl">
        <img className='w-28' src={icon} alt="" />
    </Link>
  </div>
  <div className="form-control">
    <div className='flex justify-center items-center'>
      <input type="text" placeholder="Search" className="input input-bordered relative z-10 rounded-sm" />
      <button className='btn btn-active btn-primary rounded-none py-4 ml-1 h-full rounded-sm'>
      <FaSearch className='text-sm'></FaSearch>
      </button>
    </div>
    </div>
  <div className="">
    <ul className="menu menu-horizontal p-0">
      <li><a>News</a></li>
      <li tabIndex={0}>
        <a>
          Travel
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><Link to={'/coxesBuzar'}>Cox’s  Bazar</Link></li>
          <li><Link to={'/sreemongol'}>Sreemangal</Link></li>
          <li><Link to={'/sundorbon'}>Sundarbans</Link></li>
        </ul>
      </li>
      <li><a>Blog</a></li>
      <li><a>Contact</a></li>
      <li>
        {
          userData && userData.email ? 
        //  <form action="">
           <button onClick={logout} className="btn btn-warning px-7 text-white hover:bg-[#F9A51A] py-1" type='submit'>Logout</button>
        //  </form>
          :
          <Link to={'/login'}>
        <button className="btn btn-warning px-7 text-white hover:bg-[#F9A51A] py-1">Login</button>
        </Link>
        }
        
      
      </li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;