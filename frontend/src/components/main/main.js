import React from 'react'
import { Route, Routes } from "react-router-dom"
import Users_wrap from './users/users_wrap'

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Users_wrap/>} />
            </Routes>
        </main>
    )
}
export default Main