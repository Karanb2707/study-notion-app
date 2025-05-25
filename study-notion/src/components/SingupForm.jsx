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
      <div className='flex gap-4 rounded-md text-black font-semibold'>
        <button className='py-2 px-8 border border-purple-950 rounded-md bg-yellow-300'>
          Student
        </button>
        <button className='py-2 px-8 border border-purple-950 rounded-md bg-yellow-300'>
          Teacher
        </button>
      </div>

      <form>

        {/* First name and Last name */}
        <div>
          <label>
            <p>First Name</p>
            <input
              required
              type="text"
              name='firstname'
              onChange={changeHandler}
              value={formData.firstname}
              placeholder='Enter first name'
            />
          </label>

          <label>
            <p>Last Name</p>
            <input
              required
              type="text"
              name='lastname'
              onChange={changeHandler}
              value={formData.lastname}
              placeholder='Enter last name'
            />
          </label>
        </div>

        {/* Email */}
        <label>
          <p>Email Address</p>
          <input
            required
            type="email"
            name='email'
            onChange={changeHandler}
            value={formData.email}
            placeholder='Enter email address'
          />
        </label>

        {/* password & confirm password */}
        <div>
          <label>
            <p>Password</p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name='password'
              onChange={changeHandler}
              value={formData.password}
              placeholder='Enter password'
            />

            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
            </span>

          </label>

          <label>
            <p>Confirm Password</p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name='conpassword'
              onChange={changeHandler}
              value={formData.conpassword}
              placeholder='Enter confirm password'
            />

            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
            </span>
          </label>

        </div>

        <button>
          Create Account
        </button>

      </form>
    </div>
  )
}

export default SingupForm