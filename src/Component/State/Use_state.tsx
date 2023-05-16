import React, { useState } from 'react'

export default function Use_state() {

    const[isLoggedIn , setIsLoggedIn] = useState(false)

    const handleLogin =()=>{
        setIsLoggedIn(true);
    }
    const handleLogOut = ()=>{
        setIsLoggedIn(false);
    }
  return (
    <div>
        <h4>#Example of useState :</h4>
      <button onClick={handleLogin}>Login</button>
         <button className='addEvent ms-3 mb-2' onClick={handleLogOut}>LogOut</button>
       <div>User is {isLoggedIn ? 'logged in !' : 'logged out!'}</div>
    </div>
  )
}

