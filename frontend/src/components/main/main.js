import React from 'react'
import { Route, Routes } from "react-router-dom"
import Users_wrap from './users/users_wrap'
import Profile_wrap from "./profile/Profile_wrap"
const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Users_wrap/>} />
                <Route path="/profile" element={<Profile_wrap/>} />
            </Routes>
        </main>
    )
}
export default Main