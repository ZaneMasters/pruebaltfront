import React from 'react'
import './Login.css'


import { FaUser, FaLock } from "react-icons/fa";

export const Login = () => {
  return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='UserName' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>


                <button type='submit'>Login</button>
            </form>
        </div>
  )
}
