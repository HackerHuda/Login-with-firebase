import React, { useEffect, useState } from 'react'
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import {Button, TextField} from "@mui/material"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../components/social-app/Config'
import { Navigate } from 'react-router-dom';

export default function Phone() {
  const [phone,setPhone] = useState("")
  const [OTP,setOTP] = useState("")
  const [user,setUser]=useState(false)

  const generateRecaptcha=()=>{
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    });
  }

  const reqOtp=(ev)=>{
    ev.preventDefault();
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(auth,phone,appVerifier)
    .then(confirmationResult=>{
      window.confirmationResult= confirmationResult
    }).catch((err)=>{
      console.error(err)
    })
  }
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const verifyOtp=(ev)=>{
    let otp = ev.target.value;
    setOTP(otp)
    if (otp.length === 6){
      let confirmationResult= window.confirmationResult;
      confirmationResult.confirm(OTP).then((result) => {
      setUser(result.number)
      localStorage.setItem("user",result.number)
      }).catch((err) => {
        console.error(err)
      });
    }
  }
  useEffect(()=>{
    setUser(localStorage.getItem("user"))
  })
  return (
    <div className='main'>
      {user? <Navigate to="/"/>:
          <div className='phone'>
              <h2>Login with phone</h2>
              <div className="number">
              <input
                type='tel'
                value={phone}
                onChange={handlePhoneChange}
              />
                <Button sx={{marginTop:"10px"}} variant="contained" onClick={reqOtp}>Send OTP</Button>
                <div style={{marginTop:"10px"}} id='recaptcha'></div>
                  <br />
                  <TextField
                      value={OTP}
                      onChange={verifyOtp}
                      sx={{marginTop:"10px", width:"300px"}}
                      variant='outlined'
                      size='small'
                      label="Enter OTP"
                  />
                  <Button sx={{marginTop:"10px"}} variant='contained' color='success'>Verify OTP</Button>
              </div>
          </div>}
    </div>
  )
}
