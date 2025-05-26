import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const SingupForm = () => {

  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', password: '', conpassword: '' })

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className='flex flex-col ml-4'>

      {/* student & teacher */}
      <div className='flex gap-2 rounded-md text-black font-semibold w-[400px]'>
        <button className='w-full p-2 border border-purple-950 rounded-md bg-yellow-300 cursor-pointer'>
          Student
        </button>
        <button className='w-full border border-purple-950 rounded-md bg-yellow-300 cursor-pointer'>
          Teacher
        </button>
      </div>

      <form className='flex flex-col gap-3'>

        {/* First name and Last name */}
        <div className='flex flex-row mt-4 gap-2'>
          <label className='text-white'>
            <p>First Name</p>
            <input
              required
              type="text"
              name='firstname'
              onChange={changeHandler}
              value={formData.firstname}
              placeholder='Enter first name'
              className='text-white border border-slate-300 font-semibold p-2 rounded-md mt-1'
            />
          </label>

          <label className='text-white'>
            <p>Last Name</p>
            <input
              required
              type="text"
              name='lastname'
              onChange={changeHandler}
              value={formData.lastname}
              placeholder='Enter last name'
              className='text-white border border-slate-300 font-semibold p-2 rounded-md mt-1'
            />
          </label>
        </div>

        {/* Email */}
        <label className='text-white'>
          <p>Email Address</p>
          <input
            required
            type="email"
            name='email'
            onChange={changeHandler}
            value={formData.email}
            placeholder='Enter email address'
            className='w-[300px] text-white border border-slate-300 font-semibold p-2 rounded-md mt-1'
          />
        </label>

        {/* password & confirm password */}
        <div className='flex flex-row gap-2'>
          <label className='text-white'>
            <p>Password</p>

            <div className="relative">
              <input
                required
                type={showPassword ? 'text' : 'password'}
                name='password'
                onChange={changeHandler}
                value={formData.password}
                placeholder='Enter password'
                className='text-white border border-slate-300 p-2 rounded-md mt-1'
              />

              <span onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 cursor-pointer">
                {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </span>
            </div>

          </label>

          <label className='text-white'>
            <p>Confirm Password</p>
            <div className="relative">
              <input
                required
                type={showPassword ? 'text' : 'password'}
                name='conpassword'
                onChange={changeHandler}
                value={formData.conpassword}
                placeholder='Enter confirm password'
                className='text-white border border-slate-300 p-2 font-semibold rounded-md mt-1 w-[220px]'
              />

              <span onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 cursor-pointer">
                {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </span>
            </div>
          </label>

        </div>

        <button className="w-[280px] p-2 mt-4 rounded-xl bg-red-900 border border-red-300 text-white font-semibold hover:bg-red-800 transition">
          Create Account
        </button>

      </form>
    </div>
  )
}

export default SingupForm