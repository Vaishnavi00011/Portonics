import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'


function EditPage() {
  return (
    <div className='flex'>
    <Sidebar/>
    <div className='flex flex-col w-full'>
      <Navbar></Navbar>
      {/* ----------------------Content------------------------------------- */}
      <div className='w-[100%] pt-5 flex flex-col gap-4 px-8'>
        <div>
        <h1 className='font-semibold text-[18px]'>Product Add</h1>
        <label className='text-[14px]'>Create new product</label>
         </div>
        

        <div className='flex flex-wrap  pt-10 border border-gray-300 h-[70vh] rounded-xl'>
          <div className='flex flex-col gap-4  h-[15vh] w-[30%] px-3'>
          <label className='text-[14px]'>Category</label>
        <input className='w-[90%] h-[6vh] border border-black outline-none' placeholder=''></input>
          </div>

          <div className='flex flex-col gap-4  h-[15vh] w-[30%] px-3'>
          <label className='text-[14px]'>Product name</label>
          <input className='w-[80%] h-[7vh] border border-black outline-none' placeholder=''></input>
          </div>

          <div className='flex flex-col gap-4  h-[15vh] w-[30%] px-3'>
          <label className='text-[14px]'>Price</label>
          <input className='w-[80%] h-[7vh] border border-black outline-none' placeholder=''></input>
          </div>

          <div className='flex flex-col gap-4  h-[15vh] w-[30%] px-3'>
          <label className='text-[14px]'>Discount</label>
          <input className='w-[80%] h-[7vh] border border-black outline-none' placeholder=''></input>              </div>

          <div className='flex flex-col gap-4  h-[15vh] w-[30%] px-3'>
          <label className='text-[14px]'>Rating</label>
          <input className='w-[80%] h-[7vh] border border-black outline-none' placeholder=''></input>
          </div>

          <div className='flex flex-col gap-4  h-[15vh] w-[30%] px-3'>
          <label className='text-[14px]'>Main image</label>
          <input className='w-[80%] h-[7vh] border border-black outline-none' placeholder=''></input>
          </div>

          <div className='flex flex-col gap-4  h-[15vh] w-[30%] px-3'>
          <label className='text-[14px]'> Image</label>
          <div className='flex gap-4'>
          <input className='w-[80%] h-[7vh] border border-black outline-none' placeholder=''></input>
          <button  className='w-[25%] h-[7vh] text-[15px] border border-black'>Add</button>
          </div>
         
        </div>
        {/* <div>{images.length}</div> */}
        </div>
        </div>
        <div className='flex items-center justify-center pt-4 gap-4'>
         <button className='w-[15%] h-[7vh] bg-orange-400 text-[white] text-[18px]'>Submit</button>
         <button className='w-[15%] h-[7vh] bg-slate-600 text-[white] text-[18px]'>Cancel</button>
         </div>



    </div>
    
</div>
  )
}

export default EditPage