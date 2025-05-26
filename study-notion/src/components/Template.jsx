import React from 'react'
import SignupForm from '../components/SingupForm'
import LoginForm from '../components/LoginForm'
import googleImg from '../assets/google.png'

// setLoggedIn
const Template = ({title, desc1, desc2, image, formtype, setLoggedin}) => {

  return (
    <div className='w-full flex gap-2 justify-evenly mt-6 pb-4'>

        <div className='flex flex-col gap-4'>

            <h2 className='text-4xl font-bold text-yellow-400 text-center'>{title}</h2>

            <div className='flex flex-col text-white font-semibold gap-1'>
                <p>{desc1}</p>
                <p>{desc2}</p>
            </div>

            {
                formtype === 'signup' ? <SignupForm/> : <LoginForm setLoggedin={setLoggedin}/>
            }

            <div className="flex flex-col items-start gap-4 mt-2 ml-4">
                {/* OR Divider */}
                <div className="flex items-center justify-center gap-2 text-blue-300">
                    <div className="w-[120px] h-0.5 bg-white"></div>
                    <p>OR</p>
                    <div className="w-[120px] h-0.5 bg-white"></div>
                </div>

                {/* Google Sign Up Button */}
                <button className="flex justify-center items-center py-2 px-12 mt-1 border border-purple-950 gap-4 bg-purple-700
                    rounded-xl transform hover:scale-105 duration-300 shadow-sm hover:shadow-slate-500">
                    <img src={googleImg} className="w-6 h-6" />
                    <p className="text-white font-semibold">Sign Up with Google</p>
                </button>
            </div>
        </div>

        <div className='p-2'>
            <img src={image} className='w-[460px] h-[340px] rounded-2xl transform hover:scale-102 duration-200' loading='lazy' />
        </div>
    </div>
  )

}

export default Template