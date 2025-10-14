import React from 'react'
import Cookies from "js-cookie"
import { Navigate } from 'react-router'
import UserNavbar from '../../components/UserNavbar';
import UserOverView from '../../components/UserOverView';

function UserPage() {
    const jwtToken = Cookies.get("jwt_token")
    if(jwtToken===undefined) {
        return <Navigate to="/signin" />
    }
  return (
    <div className='bg-[#111]'>
      <UserNavbar />
      <UserOverView />
    </div>
  )
}

export default UserPage;
