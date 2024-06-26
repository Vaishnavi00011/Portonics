import React from 'react'

function Trending() {
  return (
    <div className='w-[100%] flex flex-col items-center gap-10 lg:pt-14 pt-20 '>
        <h1 className='lg:text-[39px] text-[80px] font-bold text-center'>TRENDING PRODUCTS</h1>

        <div className='w-[100%] flex lg:flex-row flex-col gap-10 px-3 justify-center lg:items-start items-center   cursor-pointer bg-[]'>
          <div className='lg:w-[22%] w-full flex flex-col items-center gap-4'>
          <div className='lg:w-[100%] w-[80%] relative flex '>
           <img className='img2 w-[100%] '  src='https://www.portronics.com/cdn/shop/products/Artboard6_580x.jpg?v=1682142826'></img>
           <div className='h-[28px] w-[85px]   bg-[#AEAEAE] absolute text-[13px]  text-white flex items-center justify-center top-0 right-0  '>Save 54%</div>
           </div>
           <label className='lg:text-[18px] text-[30px]'>Power Plate 5</label>
           <div className='flex gap-4 items-center'>
           <label className='text-[25px] font-[400]  '>₹ 599</label>
           <label className='text-[13px] line-through'>₹ 1,299</label>
           </div>
           <div className='flex gap-3 items-center '>
           <div className='lg:h-[15px] h-[28px] box-border lg:w-[15px] w-[28px] rounded-full   border border-black'></div>
           <div className='lg:h-[15px] h-[28px] lg:w-[15px] w-[28px] rounded-full bg-black'></div>
           </div>
           
           </div>
           <div className='lg:w-[22%] w-full flex flex-col items-center gap-4 '>
            <div className='lg:w-[100%] w-[80%] relative'>
           <img  className='img2 w-[100%] ' src='https://www.portronics.com/cdn/shop/products/6_990bc570-39d4-4791-b971-201f08bd6082_580x.jpg?v=1682141602'></img>
           <div className='h-[28px] w-[85px]   bg-[#AEAEAE] absolute text-[13px]  text-white flex items-center justify-center top-[0px]  right-0'>Save 55%</div>
           </div>
           <label className='lg:text-[18px] text-[30px]'> Power Plate 7</label>
           <div className='flex gap-4 items-center'>
           <label className='text-[25px] font-[400]'>₹ 899</label>
           <label className='text-[13px] line-through'>₹ 1,999</label>
           </div>
           </div>
           <div className='lg:w-[22%] w-full  flex flex-col items-center gap-4 '>
           <div className='lg:w-[100%] w-[80%] relative'>
           <img className='img2  relative'  src='https://www.portronics.com/cdn/shop/products/HarmonicsTwinsS51200X12001_580x.jpg?v=1680168370'></img>
           <div className='h-[28px] w-[85px] bg-[#AEAEAE] absolute text-[13px]  text-white flex items-center justify-center top-[0px]  right-0'>Save 68%</div>
           </div>
           <label className='lg:text-[18px] text-[30px]'>Harmonics Twins S5 </label>
           <div className='flex gap-4 items-center'>
           <label className='text-[25px] font-[400]'>₹ 949</label>
           <label className='text-[13px] line-through'>₹ 2,999</label>
           </div>

           <div className='flex gap-2 items-center'>
           <div className='lg:h-[15px] h-[28px] lg:w-[15px] w-[28px] rounded-full border border-black'></div>
           <div className='lg:h-[14px] h-[28px] lg:w-[14px] w-[28px] rounded-full bg-black'></div>
           </div>

           </div>
           <div className='lg:w-[22%] w-full  flex flex-col items-center gap-4 '>
           <div className=' lg:w-[100%] w-[80%] relative'>
           <img className='img2 w-[100%]  relative'  src='https://www.portronics.com/cdn/shop/products/1200x1200-1_e1812086-6117-482b-aec7-3c2dc753b55d_580x.jpg?v=1692870978'></img>
           <div className='h-[28px] w-[85px]   bg-[#AEAEAE] absolute text-[13px]  text-white flex items-center justify-center top-[0px]  right-0'>Save 22%</div>
           </div>
           <label className='lg:text-[18px] text-[35px]'>In Tune 3</label>
           <div className='flex gap-4 items-center'>
           <label className='text-[25px] font-[400]'>₹ 699</label>
           <label className='text-[13px] line-through'>₹ 899</label>
           </div>
           </div>
         </div>
        <button className='lg:h-[45px] h-[90px] lg:w-[100px] w-[250px] lg:text-[16px] text-[35px] text-white font-[400] lg:rounded-3xl rounded-[50px] flex items-center bg-red-600 justify-center hover:bg-black lg:mt-0 mt-24'>View All</button>

    </div>
  )
}

export default Trending