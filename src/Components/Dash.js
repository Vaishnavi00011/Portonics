import React, { useState } from 'react'

function Dash() {
  const [move, setMove] = useState(0)
  return (
    <div className='h-[100vh] w-[100%] overflow-hidden'>
       <div style={{transform: `translateX(-${move}%)`}} className='image h-[100vh] w-[100%] flex flex-row transition'>
          <img className='w-[100%] ' src='https://www.portronics.com/cdn/shop/files/Mouse_Website_Banner_1920x.png?v=1707978020'></img>
          <img className='w-[100%]'  src='https://www.portronics.com/cdn/shop/files/Website_Banner_Dash_6_cb8d0e97-f3fe-4ec2-98a3-152fe03c9eb6_1920x.png?v=1704975335'></img>
          <img className='w-[100%]' src='https://www.portronics.com/cdn/shop/files/K1_K2_Keyboard_Website_Banner_205ac309-f488-42e7-8d7d-5a8eda5cdac3_1920x.png?v=1708071141'></img>
          <img className='w-[100%]' src='https://www.portronics.com/cdn/shop/files/Website_Banner_Beem_430_defd5c69-0aed-4e4b-b8c0-f088963cd5d2_1920x.png?v=1706969708'></img>
          <img className='w-[100%]' src='https://www.portronics.com/cdn/shop/files/Mouse_Website_Banner_1920x.png?v=1707978020'></img>
       </div>
       <div className='absolute text-white text-5xl top-[45vh] left-0 w-[100%] flex justify-between px-8'>
        <div className=' cursor-pointer' onClick={()=>{ if (move!=0) {setMove(move - 100)}}}>{"<"}</div>
        <div className=' cursor-pointer' onClick={()=>{ if (move != 400) {setMove(move + 100)}}}>{">"}</div>
       </div>
    </div>
  )
}

export default Dash
