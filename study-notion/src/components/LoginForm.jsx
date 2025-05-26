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
    <form onSubmit={submitHandler} className='flex flex-col gap-3 ml-4 mt-4'>

        <label className='text-white font-semibold'>
            <p>Email Address</p>

            <input 
                required 
                type="email"
                name='email'
                onChange={changeHandler}
                value={formData.email}
                placeholder='Enter email id'
                className='text-white border border-slate-300 p-1 rounded-md mt-1 w-[280px]'
            />

        </label>

        <label className='text-white font-semibold'>
            <p>Password</p>

            <div className="relative w-[280px]">
                <input
                    required
                    type={passVisible ? 'text' : 'password'}
                    name="password"
                    onChange={changeHandler}
                    value={formData.password}
                    placeholder='Enter password'
                    className='text-white border border-slate-300 p-1 rounded-md mt-1 w-full'
                />

                <span onClick={() => setPassVisible(!passVisible)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 cursor-pointer">
                    {passVisible ? <IoEyeSharp/> : <FaEyeSlash/>}
                </span>
            </div>

            <Link to='#'>
                <p className='relative text-[12px] text-blue-200 mt-1 left-[180px]'>
                    Forgot Password
                </p>
            </Link>

        </label>

        <button className='p-2 mt-4 border border-red-300 bg-red-900 rounded-xl text-white font-semibold w-[180px] cursor-pointer'>
            Sign in
        </button>

    </form>
  )
}

export default LoginForm