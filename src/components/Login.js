import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { AuthProvider } from '../Auth/auth';
import { useAuth } from '../Auth/auth';
import toast from 'react-hot-toast';
// import SimpleReactValidator from 'simple-react-validator';



function Login() {

  const auth = useAuth()
  const Navigate = useNavigate();
  const NavigateToRegister = () => {
    Navigate('/register');
  };
  // const simpleValidator = useRef(new SimpleReactValidator())

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  // const [warning,setWarning] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    }
    if (password.length < 3) {
      toast.error("Incorrect Password")
    }
    if (email.indexOf('@') === -1 || email.length < 3) {
      toast.error("Invalid Email")
    }

    axios.post("http://172.29.234.174:3000/login", data).then(res => {
      // console.log(res) 
      if (res.data.status === "Authorised") {
        auth.login(res.data)
        // if (res.data.role === "Admin"){
        //   Navigate('/AdminDashboard');
        // }
        // if (res.data.role === "User"){
        Navigate('/');
        // }
      }

      else {
        toast.error("Invalid credentials")
        // setWarning("Invalid credentials")
      }
    }).catch(err => {
      // console.log(e)
      if (err.response.status === 401) {
        // console.log(err)
        toast.error(err.response.data)
      } else {
        // console.log(err.message)
        toast.error(err.message)
      }
      // toast.error("there are some error")
      // setWarning("Invalid credentials")
    });
  }



  return (
    <div className='overflow-hidden'>
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="absolute top-28 left-64 w-96 h-96 mix-blend-multiply filter blur-2xl opacity-80 bg-purple-300 animate-blob rounded-full"></div>
        <div className="absolute top-28 right-64 w-96 h-96 mix-blend-multiply filter blur-2xl opacity-80 bg-pink-300 animate-blob animation-delay-2000 rounded-full"></div>
        <div className="absolute top-60 left-96 w-96 h-96 mix-blend-multiply filter blur-2xl opacity-80 bg-yellow-300 animate-blob animation-delay-4000 rounded-full"></div>

        <div className="py-16 px-16 bg-gray-100 rounded-2xl shadow-xl opacity-90 z-10">
          <div>
            <h1 className="text-4xl font-bold text-center mb-12 cursor-pointer" >Login</h1>
            <hr className='mb-8 -mt-4' />
            <p className="w-80 text-center text-md mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Welcome Back
            </p>

          </div>
          <form action=''>
            <div className="space-y-4">
              <input type="email" autoComplete='off' placeholder="Email Address" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" value={email} onChange={(e) => setemail(e.target.value)} />

              <input type="password" autoComplete='off' placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" value={password} onChange={(e) => setpassword(e.target.value)} />
            </div>
          </form>
          <div className="text-center mt-6">
            <button onClick={handleSubmit} className="py-3 w-56 text-xl text-white bg-green-500 rounded-2xl hover:bg-green-600 active:bg-green-600">Sign in</button>
            <p className="mt-4 text-sm">Need An Account? <span><button onClick={NavigateToRegister} className="py-3 w-50px text-l text-gray-700 bg-gray-100 rounded-2xl">Sign up</button></span>
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Login;
