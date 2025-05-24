import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = ({isLoggedin, setLoggedin}) => {

  return (
    <div className='w-full flex bg-blue-950 p-2 justify-evenly items-center'>

        <Link to='/'>
            <img src={Logo} className='w-[100px]'/>
        </Link>

        <nav>
            <ul className='flex gap-6 text-white font-semibold'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>

        {/* All Buttons */}
        <div className='flex text-white ml-6 gap-6'>
            { !isLoggedin &&
                <Link to='/login'>
                    <button className='ring px-4 py-1 rounded-md cursor-pointer hover:ring-blue-600'>
                        Login
                    </button>
                </Link>
            }
            { !isLoggedin &&
                <Link to='/signup'>
                    <button className='ring px-4 py-1 rounded-md cursor-pointer hover:ring-blue-600'>
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedin &&
                <Link to='/'>
                    <button className='ring px-4 py-1 rounded-md cursor-pointer hover:ring-blue-600'
                        onClick={() => {
                            setLoggedin(false)
                            toast.success('Logged Out')
                            }}>
                        Logout
                    </button>
                </Link>
            }
            { isLoggedin &&
                <Link to='/dashboard'>
                    <button className='ring px-4 py-1 rounded-md cursor-pointer hover:ring-blue-600'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar