import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {
const navi = useNavigate()
const [data, setData] = useState()
const [store, setStore] = useState()

const handleLogout=()=>{
  const API = "https://register-login-api.onrender.com/user/logout"
  axios.post(API,data)
  .then(res=>{
    setStore(res.data);
    navi('/')
  })
  .catch(err=>console.log(err))
}
   
  return (
    <div className='home'> 

<div className='logoutBut'><button onClick={handleLogout} className='homeLogOut'>Logout</button></div>
       <div className='homeText'> <h1 >Welcome </h1></div>
    <div className="homeBody"><img className="homeImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWF38BDWJm16xIHGVehFjJnfJFw4uno3820w&usqp=CAU" alt="no img"/></div>

    </div>
  )
}

export default Home

