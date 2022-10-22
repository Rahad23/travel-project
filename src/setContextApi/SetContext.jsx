import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/Firebase.init';

export const provideApi = createContext();
const auth = getAuth(app);
const Googleprovider = new GoogleAuthProvider();

const SetContext = ({children}) => {
    
    // user documents
    const [userData, setUserData]=useState('');
// loader hook
    const [loader, setLoader]=useState(true);
    // Create user with email and password
    const createUserEmailAndPassword =(email, password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createUserGooglePopup = ()=>{
        setLoader(true);
        return signInWithPopup(auth, Googleprovider);
    }
    // Login user with email and password
    const loginUserWithEmailAndPassword=(email, password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // send email verification
    const emailVerification = ()=>{
        setLoader(true);
        return sendEmailVerification(auth.currentUser);
    }

    // send password reset email
    const resetPassword = (email)=>{
        setLoader(true);
        return sendPasswordResetEmail(auth, email);
    }
// user track function
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setUserData(user);
            setLoader(false);
        });
        return ()=> unsubscribe();
    },[])

    // user logout
    const userLogOut=()=>{
       return signOut(auth);
    }

   const providerAuth = {createUserEmailAndPassword, createUserGooglePopup, loginUserWithEmailAndPassword, emailVerification, resetPassword, userData, userLogOut, loader};

    return (
        <provideApi.Provider value={providerAuth}>
            {children}
        </provideApi.Provider>
    );
};

export default SetContext;