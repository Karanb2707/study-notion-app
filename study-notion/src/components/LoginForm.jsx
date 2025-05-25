import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

const LoginForm = () => {
    
    const [formData, setFormData] = useState({email:'', password:''});

    const [passVisible, setPassVisible] = useState(false);

    function changeHandler(event) {
        const {name, value} = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

  return (
    <form>

        <label>
            <p>Email Address</p>

            <input 
                required 
                type="email"
                name='email'
                onChange={changeHandler}
                value={formData.email}
                placeholder='Enter email id'
            />

        </label>

        <label>
            <p>Password</p>

            <input 
                required
                type={passVisible ? 'text' : 'password'}
                name="password"
                onChange={changeHandler}
                value={formData.password}
                placeholder='Enter password'
            />

            <span onClick={() => setPassVisible(!passVisible)}>
                {passVisible ? <IoEyeSharp/> : <FaEyeSlash/>}
            </span>

            <Link to='#'>
                <p>
                    Forgot Password
                </p>
            </Link>

        </label>

        <button>
            Sign in
        </button>

    </form>
  )
}

export default LoginForm