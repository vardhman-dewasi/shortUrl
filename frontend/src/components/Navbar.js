import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    let login = props.islogin;
    let setlogin = props.setlogin;
  return (
    <div className='container'>
      
        <div className='logo mx-7 text-2xl text-orange-600 font-bold'>
           
            <ul class="font-mullish py-7 hover:text-white cursor-pointer
             transition-all duration-200 relative group">
             <h1>Hey! Welcome</h1>
            <div class="absolute bottom-0 w-full h-1 bg-orange-600 hidden group-hover:block"></div>
            </ul>
            </div>

     <div className='navbarr'>
     <nav>
        <ul className='flex gap-10 text-xl'>
            
            <li class="text-white font-mullish py-7 hover:text-orange-600 cursor-pointer
             transition-all duration-200 relative group">
            <Link to="/">Home</Link>
            <div class="absolute bottom-0 w-full h-1 bg-orange-600 hidden group-hover:block"></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-orange-600 cursor-pointer
             transition-all duration-200 relative group">
            <Link to="/">About</Link>
            <div class="absolute bottom-0 w-full h-1 bg-orange-600 hidden group-hover:block"></div>
            </li>

            <li class="text-white font-mullish py-7 hover:text-orange-600 cursor-pointer
             transition-all duration-200 relative group">
            <Link to="/">Contact us</Link>
            <div class="absolute bottom-0 w-full h-1 bg-orange-600 hidden group-hover:block"></div>
            </li>
            
        </ul>
      </nav>
     </div>

      {/* buttons --> login,logout,dashboard,signup */}
      <div className='btn'>
        { !login &&
            <Link to="/login">
                <button className='login-btn text' onClick={()=>{
                    setlogin(false);
                    // toast.success("Login Successfully");
                }}
                >Login</button>
            </Link>
        }
        { !login &&
            <Link to="/signup">
                <button className='sign-btn'  onClick={()=>{
                    setlogin(false);
                    // toast.success("Signup Successfully");
                }}
                >SignUp</button>
            </Link>
        }
        { login &&
            <Link to="/">
                <button className='login-btn' onClick={()=>{
                    setlogin(false);
                    toast.success("LogOut Successfully");
                }}
                >Log Out</button>
            </Link>
        }
        { login &&
            <Link to="/dashboard">
                <button className='sign-btn' >DashBoard</button>
            </Link>
        }
      </div>
    </div>
  )
}