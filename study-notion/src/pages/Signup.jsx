import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/study2.png'


const SignUp = ({setLoggedIn}) => {
  return (
    <div>
      <Template
        title="Get Started with Study Notion"
        desc1="Sign up to organize your study, notes, and goals in one place."
        desc2="Level up your learning with smarter organization and focused study tools."
        image={signupImg}
        formtype="signup"
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default SignUp