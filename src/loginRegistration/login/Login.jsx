import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { provideApi } from './../../setContextApi/SetContext';

const Login = () => {
   const {loginUserWithEmailAndPassword, resetPassword} = useContext(provideApi);
// password show hook
    const [showPassword, setShowPassword]=useState(false);

    const show= ()=>{
        setShowPassword(!showPassword);
    }
// setPssword error
const [emailType, setEmailType] = useState('');
console.log(emailType);
// get email input field
const [emailresetPassword, setEmail] = useState('');

const navigate = useNavigate();
//    user login function
const loginUser =(event)=>{
    event.preventDefault();
    const target = event.target;
    const email = target.email.value;
    const password = target.password.value;
    console.log(email, password);
    //   use navigate
    loginUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast.success('Login successFull');
        navigate('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    
}
// set onBlure Function
const geEmail = (event)=>{
    event.preventDefault();
    const email = event.target.value;
    setEmail(email);
}

// reset password
const resetPasswordUserEmail = (event) =>{
    event.preventDefault();

    if(!emailresetPassword){
        setEmailType("Type your email and reset your password");
    }else{
        setEmailType('');
    }
    resetPassword(emailresetPassword)
    .then(() => {
        // Password reset email sent!
        toast.success("Check your email And change your password");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
}
    return (
        <div className='flex justify-center items-center h-[600px]'>
        <div className="card w-96 bg-base-100 shadow-xl p-5">
        <div className="card-body">
        <h2 className="card-title mb-3">
      Login
    </h2>
    <form onSubmit={loginUser}>

        <input onBlur={geEmail} type="email" name='email' placeholder="Email" className="input input-bordered input-primary w-full max-w-xs mb-3" required />
        {
            emailType ? <p className='text-red-400 label-text-alt link link-hover'>!! {emailType}</p> : <p></p>
        }
        <input type={showPassword ? "text": "password"} name='password' placeholder="password" className="input input-bordered input-primary w-full max-w-xs mb-3" required />

        <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center'>

        <input onClick={show} type="checkbox" className="default:ring-2 mr-2" id='show' />
        <label htmlFor="show" className='label-text-alt link link-hover'>Show-Password</label>

        </div>
        <span onClick={resetPasswordUserEmail} className='label-text-alt link link-hover'>Forget password</span>
        </div>
        <button className="btn bg-[#f9a51a] text-black" style={{backgroundColor:"rgba(249, 165, 26, 1)"}}>Login</button>
    </form>
        <p>Don't have an account? <Link to={'/register'} className='text-[#f9a51a] label-text-alt link link-hover'>Create An Account</Link></p>
        </div>
    </div>
        </div>
    );
};

export default Login;