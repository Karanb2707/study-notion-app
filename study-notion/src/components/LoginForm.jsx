import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const LoginForm = ({setLoggedin}) => {
    
    const [formData, setFormData] = useState({email:'', password:''});

    const [passVisible, setPassVisible] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event) {
        const {name, value} = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function submitHandler(event) {
        event.preventDefault()
        setLoggedin(true);
        toast.success('Logged In!')
        navigate('/dashboard')
    }

  return (
    <form onSubmit={submitHandler}>

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