import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const LoginForm = ({ setLoggedin }) => {

    const [formData, setFormData] = useState({ email: '', password: '' });

    const [passVisible, setPassVisible] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event) {
        const { name, value } = event.target;
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
        <form onSubmit={submitHandler} className="flex flex-col gap-4 ml-4 mt-4 text-white font-semibold">

            {/* Email Field */}
            <label htmlFor="email">
                <p>Email Address</p>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    onChange={changeHandler}
                    value={formData.email}
                    placeholder="Enter email id"
                    className="w-[280px] mt-1 p-2 rounded-md border border-slate-300 bg-transparent text-white placeholder-slate-400"
                />
            </label>

            {/* Password Field */}
            <label htmlFor="password">
                <p>Password</p>

                <div className="relative w-[280px] mt-1">
                    <input
                        required
                        type={passVisible ? 'text' : 'password'}
                        id="password"
                        name="password"
                        onChange={changeHandler}
                        value={formData.password}
                        placeholder="Enter password"
                        className="w-full p-2 pr-10 rounded-md border border-slate-300 bg-transparent text-white placeholder-slate-400"
                    />

                    <span
                        onClick={() => setPassVisible(!passVisible)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 cursor-pointer"
                    >
                        {passVisible ? <IoEyeSharp /> : <FaEyeSlash />}
                    </span>
                </div>

                <Link to="#" className="text-[12px] text-yellow-400 hover:underline">
                    Forgot Password?
                </Link>
            </label>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-[180px] p-2 mt-4 rounded-xl bg-red-900 border border-red-300 text-white font-semibold hover:bg-red-800 transition"
            >
                Sign In
            </button>
        </form>

    )
}

export default LoginForm