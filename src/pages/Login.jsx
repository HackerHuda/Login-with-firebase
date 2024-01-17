import Google from "../img/google.png"
import Facebook from "../img/facebook.png"
import Github from "../img/github.png"
import React, { useEffect, useState } from 'react'
import {auth} from "../components/social-app/Config.js"
import {signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth"
import { Navigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import PhoneSVG from "../img/Phone.svg"

export default function Login() {
  const [value,setValue]= useState('')
  const [user,setUser] = useState("")
  

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
            <h3>Login with Phone Otp</h3>
            <img src={PhoneSVG} alt="" className="phone-img" />
            <Link to="/phone" className="submit">Login with phone</Link>
        </div>
      </div>
    </div>
  )
}
