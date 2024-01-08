import React, { useState } from 'react'
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import {Navigate } from 'react-router-dom';
import {auth} from "../components/social-app/Config.js"
//import Toaster, { toast } from "react-hot-toast"
import {Button, TextField} from "@mui/material"

export default function Phone() {
    

    
    // const [otp,setOtp]=useState("")
    // const [phone,setPhone]=useState("")
    // const [showOTP,setShowOTP] = useState(false)
    // const [user,setUser] = useState(null)

    // function onCapthVerify() {
    //     if (!window.recaptchaVerifier) {
    //         window.recaptchaVerifier = new RecaptchaVerifier(auth,'recaptcha', {
    //             'size': 'invisible',
    //             'callback': (response) => {
    //                 onSignUp();
    //             },
    //             'expired-callback': () => { }
    //         }, auth);
    //     }
    // }

    // function onSignUp(){
    //     onCapthVerify()
    //     const appVerifier = window.recaptchaVerifier;
    //     const formatPh = "+" + phone
    //     signInWithPhoneNumber(auth,formatPh, appVerifier)
    //     .then((confirmationResult) => {
    //         window.confirmationResult = confirmationResult;
    //         setShowOTP(true)
    //         toast.success('OTP sent successfully')
    //     }).catch((error) => {
    //         console.log(error)
    //     });
    // }
    // function onOTPVerify(){
    //     window.confirmationResult.confirm(otp).then(async(res)=>{
    //         console.log(res)
    //         setUser(res.user)
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }
  return (
    // <div className='phone'>
    //     <Toaster toastOptions={{duration:4000}}/>
    //     <div id='recaptcha'></div>
    //     {user?(
    //         <Navigate to="/"/>
    //     ):(
    //         <div className='card'>
    //             <h2>Log in with phone OTP</h2>
    //             {
    //             showOTP?(
    //                 <form action="" className="form">
    //                     <div className="otp">
    //                     <label htmlFor="phone" className="input">
    //                         Enter OTP
    //                     </label>
    //                     <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpTypes="number" disabled={false} autoFocus className="otpinp"></OtpInput>
    //                     <button className="submit" onClick={onOTPVerify}>
    //                         <span>Verify OTP</span>
    //                     </button>
    //                     </div>
    //                 </form>
    //             ):(
    //                 <form action="" className="form">
    //                     <div className="otp">
    //                         <label htmlFor="" className="input">
    //                             Verify phone number
    //                         </label>
    //                         <PhoneInput country={"in"} value={phone} onChange={setPhone}/>
    //                         <button className="submit" onClick={onSignUp}>
    //                             <span>Send OTP</span>
    //                         </button>
    //                     </div>
    //                 </form>
    //                 )
    //             } 
    //         </div>
    //     )}
    // </div>
    
    <div></div>
   )
}
