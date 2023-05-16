import { type } from 'os'
import React, { useState } from 'react'

type UserType = {
    Name : string
    Email : string
}

export default function UseState() {

    const[User , setUser] = useState <UserType | null>(null)

    const handleLogin = () =>{
        setUser ({
            Name : 'Elvina' ,
            Email : 'elvina4@gmail.com'
        })
    }

    const handleLogOut = ()=>{
        setUser(null)
    }

  return (
    <div>
      <button className='btn btn-primary mb-3' onClick={handleLogin}>Login</button>
       <button className='btn btn-light ms-3 mb-3' onClick={handleLogOut}>LogOut</button>
       <p>User name is :{User?.Name} </p>
       <p>User email is : {User?.Email} </p>
    </div>
  )
}
