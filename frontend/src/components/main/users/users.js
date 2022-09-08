import axios from 'axios';
import React from 'react'
import { useEffect } from "react"
import HomeUsers from "./HomeUsers"

const Users = (props) => {
    useEffect(() => {
        console.log(props)
        if (props.users.length === 0){
            axios("api/user")
                .then(users => props.getUsers(users.data))
        }
     }, []);
    
     const users = props.users.map((user) => {
         return (
             <HomeUsers key={user.id}
                 name={user.name}
                 age={user.age}
                 country={user.country}
                 company={user.company}
                 id={user.id}
             />
         )
     })
     return (
         <div>
             {users}
         </div>
         
     )
 }
 export default Users