import React from 'react'

function Footer() {
  return (
    <div className='h-[83vh] w-[100%] flex flex-col gap-7  pt-10 bg-[]'>

        <div className='h-[80vh]  w-[100%] flex lg:flex-row flex-col  gap-10   bg-[#EBF0F2] items-center  px-28 pt-11 '>
            <div className='w-[75%] h-[40vh] flex flex-col  gap-5   '> 
                   <div className='flex flex-col lg:items-start items-center lg:gap-0 gap-4'  >
                <h1 className='lg:text-[25px] text-[55px] lg:font-semibold font-bold '>Join The Club </h1>
                <p className='lg:text-[15px] text-[22px] lg:w-[490px] w-[580px] lg:text-start text-center '>Subscribe today to hear about our newest offers, new products, collaborations, everything Portronics - Directly to your inbox.</p>
                <div className='flex  items-center'>
                <input className='lg:w-[430px] w-[580px] lg:placeholder:text-[16px] placeholder:text-[32px] placeholder:text-[black]  h-[10vh]  bg-[#EBF0F2] lg:border-b-2  border-b-4   border-black outline-none pb-3 pt-2  text-[16px]  ' placeholder='Enter Your Email'></input>
                <i class=" ii fa fa-envelope-o lg:border-b-2 border-b-4  border-black fa-2x  lg:pb-[13px] lg:pt-[21px] pb-[15px] pt-[4px]  lg:text-[24px] text-[45px]" aria-hidden="true"></i>
              </div>
            </div>
            </div>

            <div className=' lg:hidden w-[820px] h-[50px]  items-center flex justify-center'>
              <div className='w-[820px] h-[40px] bg-red-500'></div>
            </div>

            <div className=' h-[40vh] w-[25%] items-center-start  flex flex-col gap-5  bg-[]'>
                <div className='flex flex-col '>
               <h1 className='lg:text-[25px] text-[40px] lg:font-semibold font-bold'>Contact Us</h1>
               <p className='w-[180px] text-[14px]   text-start '>E-mail: help@portronics.com
                    Phone: (+91)9555-245-245
                    Need Help : Click here</p>
                </div>
                <div className='flex flex-col'>
               <h1 className='text-[18px]  font-semibold'>FOR BUSINESS QUERIES</h1>
               <label className='text-[14px]  text-start'>sales@portronics.com</label>
               </div>
            </div>
        </div>

      <div className='h-[32vh] w-[100%] flex flex-col  gap-6 '>
        <div className='flex gap-6   text-[14px]  items-center justify-center '>
          <label>Blog</label>
          <label>Support</label>
          <label>Track Your Order</label>
          <label>Privacy Policy</label>
          <label>E-Waste Management</label>
          <label>Term and Conditions</label>
          <label>CSR Policy</label>
          <label>Warranty,Return Refund</label>
          <label>About Us</label>
          <label>Become Prtner</label>
          <label>Brochure</label>
          </div>

          <div className='flex items-center justify-center gap-7'>
            <div className='h-[45px] w-[45px] rounded-full border flex items-center justify-center border-black bg-orange-300'>
          <i class=" icon-1 fa fa-instagram" aria-hidden="true"></i>
          </div>
          <div  className='h-[45px] w-[45px] rounded-full  flex items-center justify-center border-black bg-blue-900 '>
          <i class=" icon-1 fa fa-facebook" aria-hidden="true"></i>
          </div>
          <div  className='h-[45px] w-[45px] rounded-full flex items-center justify-center border-black bg-black'>
          <i class=" icon-1 fa fa-twitter" aria-hidden="true"></i>
          </div>
          <div  className='h-[45px] w-[45px] rounded-full  flex items-center justify-center border-black bg-sky-400'>
          <i class=" icon-1 fa fa-linkedin" aria-hidden="true"></i>
          </div>
          <div  className='h-[45px] w-[45px] rounded-full  flex items-center justify-center border-black bg-red-500'>
          <i class=" icon-1 fa fa-youtube-play" aria-hidden="true"></i>
          </div>



          </div>
          <div className='flex flex-col items-center text-[11px] pb-5'>
          <label>© 2024 Portronics Digital Private Limited. All Rights Reserved.</label>
        <label>CIN - U74140DL2010PTC203767</label>
        <label>For Queries Contact us: Legal, Portronics Digital Private Limited, Vegas Business Tower, Unit No. - 1082 to 1088,
</label>
        <label>Floor 10, Plot. - 6, Sector 14 Dwarka, Dwarka, New Delhi, Delhi 110075, India</label>
        </div>


      </div>  

    </div>
  )
}

export default Footer