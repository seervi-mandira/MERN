import React, { useEffect } from 'react'
 import { Navigate } from 'react-router-dom';
  import { useauth } from '../authcontext/Usercontext';
function Logout() {
const { Logoutuser } = useauth();

useEffect(() =>{
Logoutuser()
}, [Logoutuser])


  return <Navigate to='/register' />
  
}

export default Logout