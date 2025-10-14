import React from 'react'
import { useNavigate } from 'react-router'

function NotFound() {
    const navigate = useNavigate()
    const handleNavigatetoHome = () => {
        navigate("/",{replace:true})
    }
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat bg-[url('https://i.redd.it/x1sr1lob3ai41.jpg')]">
      <button onClick={handleNavigatetoHome} className='bg-white m-10 p-2 rounded-xl font-semibold cursor-pointer '>Return to Home</button>
    </div>
  )
}

export default NotFound
