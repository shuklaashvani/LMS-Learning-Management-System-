import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Sidenav from '../Layout/Sidenav'

function Users() {

    const URL = "http://172.29.235.99:3000"

    const [user,setUser] = useState([])
    useEffect(()=>{
        axios.get(`${URL}/user`).then(res=>{
            setUser(res.data)
            // console.log(res.data)
        })
    },[user])


    const ChangeHandler = (e,role) =>{
        e.preventDefault()
        console.log(role)
        
    }

    return (
        <div className='relative'>
            <div className='sticky top-0'>
                <Header />
            </div>
            <aside className="flex">
                <Sidenav />
                <div className='flex flex-col w-full'>
                    <h1 className='mt-6 mb-3 capitalize text-4xl mx-auto font-bold'>
                        users
                    </h1>
                    <hr className="w-1/4 mx-auto h-2 rounded-full bg-gradient-to-r from-gray-700 " />

                    <hr className='w-full h-2 mt-6'/>
                    <h2 className='mt-5 mb-2 capitalize text-2xl ml-20 font-bold'>
                        Permissions
                    </h2>
                    <hr className='w-1/4 ml-20 h-3'/>


                    {user.map((user,key)=>{
                        
                        
                        return(
                            <form>

                            <div className='flex flex-row ml-20 mt-3'>
                        <div className='w-4/6'>
                            <ul className="items-center w-full border text-gray-900 bg-white  border-gray-600 flex ">
                                <li className="w-4/5 border-gray-800 ">
                                    <div className="flex items-center bg-gray-800 pl-3">
                                            <label for="Name" className="py-4 pl-3 w-full text-xl font-semibold capitalize text-gray-100 ">{user.name}</label>
                                    </div>
                                </li>
                                
                                <li className="w-4/5 border-gray-600 border-r-2 ">
                                    <div className="flex items-center pl-5">
                                        <input 
                                            id="Admin" 
                                            type="radio" 
                                            value={user.role} 
                                            name={user._id}
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " 
                                            // checked ={user.role === "Admin"}
                                            defaultChecked={user.role === "Admin"}
                                                                                        
                                        />
                                        <label for={user.role} className="py-3 ml-2 w-full text-md font-medium text-gray-900 " >Admin</label>
                                    </div>
                                </li>
                                <li className="w-4/5 border-gray-600 border-r-2 ">
                                    <div className="flex items-center pl-5">
                                        <input 
                                            id="Educator" 
                                            type="radio" 
                                            value={user.role}
                                            name={user._id}
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                                            // checked = {user.role === "Educator"}
                                            defaultChecked={user.role === "Educator"}
                                            
                                        />
                                        <label for="Educator" className="py-3 ml-2 w-full text-md font-medium text-gray-900 ">Educator</label>
                                    </div>
                                </li>
                                <li className="w-4/5 border-gray-600">
                                    <div className="flex items-center pl-5">
                                        <input 
                                            id="Student" 
                                            type="radio" 
                                            value={user.role} 
                                            name={user._id} 
                                            defaultChecked = {user.role === "User"}
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                                            
                                        />
                                        <label for="Student" className="py-3 ml-2 w-full text-md font-medium text-gray-900 ">Student</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='ml-16 -mt-2'>
                            <button className="bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 text-black active:bg-lime-600 font-bold uppercase text-sm px-6 py-3 mt-4 rounded-md shadow hover:shadow-lg outline-none  mr-1 mb-1 ease-linear transition-all duration-150"
                                type="Submit">
                            Update
                            </button>
                        </div>
                    </div>
                    
                    </form>
                        )
                    })

                    }

                    
                </div>
            </aside>
        </div>
    )
}

export default Users
