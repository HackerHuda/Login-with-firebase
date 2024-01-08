import Google from "../img/google.png"
import Facebook from "../img/facebook.png"
import Github from "../img/github.png"
import React, { useEffect, useState } from 'react'
import {auth} from "../components/social-app/Config.js"
import {signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth"
import { Navigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import {Button, TextField} from "@mui/material"

export default function Login() {
  const [value,setValue]= useState('')
  const [phone,setPhone] = useState("")
  const [user,setUser] = useState("")
  const [otp,setOtp] = useState("")

  const sendOtp= async ()=>{
    try{
        const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
        const  confirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
        setUser(confirmation)
        console.log(confirmation)
    }catch(err){
        console.error(err)
    }
  }
  const verifyOTP= async ()=>{
      try{
          await user.confirm(otp)
      }catch(err){
          console.error(err)
      }
  }

  const signInWithGoogle=()=>{
    const Googleprovider = new GoogleAuthProvider();
    signInWithPopup(auth,Googleprovider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
    })
  }
  const signInWithFacebook=()=>{
    const Faceprovider =new FacebookAuthProvider();
    signInWithPopup(auth,Faceprovider).then((data)=>{
      setValue(data._tokenResponse.email)
      localStorage.setItem("email",data._tokenResponse.email)
    })
  }
  const signInwithGithub=()=>{
    const Gitprovider =new GithubAuthProvider();
    signInWithPopup(auth,Gitprovider).then((data)=>{
      setValue(data._tokenResponse.email)
      localStorage.setItem("email",data._tokenResponse.email)

    })
  }
  
  useEffect(()=>{
    setValue(localStorage.getItem("email"))
  })
  return (
    
    <div className='login'>
      <h1 className="loginTitle">Choose a login method</h1>
      <div className="wrapper">
        <div className="left">
          {value? <Navigate to="/"/>:
            <div className="loginButton google" onClick={signInWithGoogle}>
              <img src={Google} alt="" className='socialIcon'/>
              Google
            </div>
          }
          {value? <Navigate to="/"/>:
            <div className="loginButton facebook" onClick={signInWithFacebook}>
                <img src={Facebook} alt="" className='socialIcon'/>
                Facebook
            </div>
          }
          {value? <Navigate to="/"/>:
            <div className="loginButton github" onClick={signInwithGithub}>
              <img src={Github} alt="" className='socialIcon'/>
              Github
            </div>
          }
          </div>
          <div className='right'>
            <div className="phone">
              <h2>Login with phone</h2>
              <div className="number">
                <PhoneInput
                country={"in"}
                value={phone}
                onChange={(phone)=>setPhone("+" + phone)}
                />
                <Button onClick={sendOtp} sx={{marginTop:"10px"}} variant="contained">Send OTP</Button>
                <div style={{marginTop:"10px"}} id='recaptcha'></div>
                  <br />
                  <TextField
                      onChange={(e)=> setOtp(e.target.value)}
                      sx={{marginTop:"10px", width:"300px"}}
                      variant='outlined'
                      size='small'
                      label="Enter OTP"
                  />
                  <Button onClick={verifyOTP} sx={{marginTop:"10px"}} variant='contained' color='success'>Verify OTP</Button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
