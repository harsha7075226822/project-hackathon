// import React, { useState } from 'react'
import Cookies from "js-cookie"
import { FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router'

function UserNavbar() {
    const navigate = useNavigate()

    const handleLogout = () => {
        Cookies.remove("jwt_token")
        navigate("/signin",{replace:true})
    }

  return (
    <div className="bg-[#111] text-white fixed w-full">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 bg-black border-b border-gray-800">
        <div className="text-2xl font-bold flex items-center gap-2 text-purple-500">
          <span className="text-white">&lt;/&gt;</span> HackNext
        </div>
        <ul className="flex items-center gap-6">
          <li onClick={handleLogout} className="flex items-center gap-1 cursor-pointer hover:text-purple-500">
            <FaSignInAlt /> Logout
          </li>
          <li>
            
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default UserNavbar;
