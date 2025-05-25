import React from 'react'
import Frame from '../assets/bg1'

// setLoggedIn
const Template = ({title, desc1, desc2, image, formtype}) => {

  return (
    <div>
        <div>
            <h2>{title}</h2>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {
                formtype === 'signup' ? <SignupForm/> : <LoginForm/>
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Sign Up with Google</p>
            </button>
        </div>

        <div>
            <img src={Frame} className='' loading='lazy' />
            <img src={image} className='' loading='lazy' />
        </div>
    </div>
  )

}

export default Template