import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/study1.png'

const Login = ({setLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="All-in-one workspace to organize notes, tasks, and study plans seamlessly."
        desc2="Study, plan, and organize — all in one app."
        image={loginImg}
        formtype='login'
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default Login