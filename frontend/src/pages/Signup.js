import React from 'react'
import Template from '../components/Template';
function Signup({setlogin}) {
  return (
    <Template 
   title = "Welcome Back"
   desc1 = "Build Skill Today,Tomorrow, and beyond"
   desc2 = "Education to future-proof your career"
   formtype="signup"
   setlogin={setlogin}
   />
  )
}

export default Signup;
