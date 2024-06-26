import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'



function Dashboard() {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='flex flex-col w-full'>
          <Navbar></Navbar>
          {/* ----------------------Content------------------------------------- */}
          <div>
            
          </div>

        </div>
        
    </div>
  )
}

export default Dashboard