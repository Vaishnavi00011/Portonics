import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from '../json/User.json';

function Header() {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [scroll, setScroll] = useState(0)
  const hadlescroll = ()=>{
    setScroll(window.scrollY)
  }
  document.addEventListener('scroll',hadlescroll)

  const logInCheck = ()=>{
    const userList = UserData.filter((i)=>i.username==name);
    alert(JSON.stringify(userList))
    if(userList.length>0){

      if(userList[0].password==password){
        alert(`Welcome ${name}`);
      }
      else{alert('Wrong Password')}
    }
    
    else{alert('No user found')}
  }


  const navigate  = useNavigate()
  const [loginModal, setLoginModal] = useState(false)
  return (
    <div className={`${scroll>20 && 'header'} px-8 w-[100%] z-10 lg:h-[10vh] h-[15vh] items-center flex flex-row bg-black justify-between fixed top-0`}>
      <div className='lg:hidden block'>
      <i class="fa fa-bars text-white text-5xl " aria-hidden="true"></i>

      </div>
    <div className=' h-[10vh] flex items-center cursor-pointer'>
         <img onClick={()=>navigate('/')} className='lg:h-[6vh] h-[10vh]' src='https://www.portronics.com/cdn/shop/files/Primary_logo_color_c380e550-7bba-4ab6-8129-f41d6e4e7c45_180x@2x.webp?v=1647798144'></img>
    </div>
    <div className=' lg:flex hidden h-[10vh]  text-[17px]  text-white  items-center gap-10 z'>
        <label className='l2  hover:bg-white hover:text-black cursor-pointer w-[80px] flex items-center justify-center'>Shop</label>
        <label className='l1 cursor-pointer'>New Arrival</label>
        <label className='l1  cursor-pointer'>Corporate gifting</label>
        <label className='l1  cursor-pointer'>Warranty Ragistration</label>
        <label className='l2  hover:bg-white hover:text-black w-[80px]  flex items-center justify-center cursor-pointer'>Support</label>
    </div>
    <div className='h-[10vh] text-white gap-5 flex items-center cursor-pointer '>
    <i className="  fa fa-search lg:text-2xl text-5xl"></i>
     <i onClick={()=>setLoginModal(true)} class="lg:flex hidden icon fa fa-user-o" aria-hidden="true"></i>
     <i class="fa fa-shopping-bag lg:text-2xl text-5xl" aria-hidden="true"></i>


    </div>
    {/* ---------------------Login Popup Model-------------------------- */}
    {loginModal == true &&
    <div className='w-full h-[100vh] login-div fixed top-0 left-0 flex items-center justify-center'>
     
    
      <div className='h-[60vh] w-[25%] rounded-xl bg-white flex flex-col px-3 gap-3'>
        <div className='flex items-end justify-end w-[100%] h-[5vh]'>
      <div onClick={()=>setLoginModal(false)} className='w-[15px] h-[15px]  text-[13px] bg-gray-600 text-white border border-black rounded-full flex items-center justify-center mt-4 '> x</div>
      </div>
        <h1 className=' text-center font-bold text-[20px]'>Log in</h1>
        <div className='flex flex-col'>
        <label className='  text-gray-500'>Username</label>
        <input onChange={(e)=>setName(e.target.value)} className=' border-gray-400 border h-[6vh] rounded-xl outline-none' placeholder=' Enter Username'></input>
        </div>
        <div className='flex flex-col'>
        <label className='  text-gray-500'>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} className=' border-gray-400 border h-[6vh] rounded-xl outline-none' placeholder=' Enter password'></input>
        </div>

         <div className='flex gap-2 '>
        <input type='checkbox'></input>
        <label className='text-[13px] text-gray-500'>Remamber me</label>
        </div>
        <button onClick={()=>logInCheck()} className='w-[100%] h-[6vh] bg-black text-white rounded-2xl'>Sign In</button>

        <div className='w-[100%] h-[5vh] flex justify-end '>
          <label className='text-[14px] text-blue-500 font-semibold'>forgot password? </label>
        </div>
  

      </div>
    </div> }

    </div>
  )
}

export default Header