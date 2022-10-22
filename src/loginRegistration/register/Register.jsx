import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {FaFacebook, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { provideApi } from './../../setContextApi/SetContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { router } from './../../routs/Routs';

const Register = () => {

    const {createUserEmailAndPassword, createUserGooglePopup, emailVerification} = useContext(provideApi);
    // show password hook
    const [stateChange, setStateChange]=useState(false);
    const textPassword=()=>{
        setStateChange(!stateChange);
    }
    // redirect login
    const navigate = useNavigate();
    // console.log(createUserEmailAndPassword);
    const createEmailAndPassword = (event)=>{
        event.preventDefault();
        const target = event.target;
        const email = target.email.value;
        const name = target.name.value;
        const password = target.password.value;

        // console.log(password, email, name);

        createUserEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            emailVerification()
            .then(() => {
                toast.success("Check your gmail spam folder, and verify your email")
              });
            toast.success("Registration success full");
            target.reset();
            navigate('/login');
            // console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            // ..
          });
    }

    const googlePopUpLogin=()=>{
        createUserGooglePopup()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            toast.success('Login success full');
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
    return (
        <div className='flex justify-center items-center h-[600px]'>
        <div className="card w-96 bg-base-100 shadow-xl p-5">
        <div className="card-body">
        <h2 className="card-title mb-3">
        Register
    </h2>
        <form onSubmit={createEmailAndPassword}>

                
                <label htmlFor="name" className='mb-0'>Name**</label>
                <input type="text" id='name' name='name' placeholder="user name or email" className="input bottom-2 input-bordered input-primary w-full max-w-xs mb-3" required />

                <label htmlFor="email" className='mb-0'>Email**</label>
                <input type="email" id='email' name='email' placeholder="user name or email" className="input bottom-2 input-bordered input-primary w-full max-w-xs mb-3" required />

                <label htmlFor="password" className='mb-0'>Password**</label>
                <input type={stateChange ? "text": "password"} name='password' id='password' placeholder="password" className="input input-bordered input-primary w-full max-w-xs mb-3" required />

            <div className='flex items-center justify-between mb-4'>
            <div className='flex items-center'>
            <input onClick={textPassword} type="checkbox" className="default:ring-2 mr-2" id='show' />
                <label htmlFor="show" className='label-text-alt link link-hover'>Show-Password</label>
            </div>
            <Link to={'/login'} className='label-text-alt link link-hover text-[#f9a51a]'>Login**</Link>
            </div>
                <button className="btn bg-[#f9a51a]  text-black" style={{backgroundColor:"rgba(249, 165, 26, 1)"}}>Register</button>
        
        </form>

        <p className='mb-0 text-center mt-2'>OR</p>
        <hr className='mt-0' />
    
    <button onClick={googlePopUpLogin} className="btn bg-[#D926A9] border-none hover:bg-[#8f0069] w-full"><FaGoogle className='text-2xl text-white mr-2'></FaGoogle> Log-In-with-Google</button>

    <button className="btn  bg-[#0793f0] border-none hover:bg-[#2d71f0] w-full"><FaFacebook className='text-2xl text-white mr-2'></FaFacebook> Log-In-with-Facebook
    </button>
        </div>
    </div>
        </div>
    );
};

export default Register;