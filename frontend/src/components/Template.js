import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
function Template({ title, disc1, disc2, formtype, setlogin }) {
  return (
    <div>

      <div>
        <h1>{title}</h1>
        <p>
          <span>{disc1}</span>
          <span>{disc2}</span>
        </p>
        {formtype === "signup" ? (<SignUpForm setlogin =  {setlogin} />) : (<LoginForm setlogin = {setlogin} />)}
          
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
     
        <button>Sign Up With Google</button>

      </div>
    </div>
  )
}

export default Template
