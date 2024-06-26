import React from 'react'
import Header from '../Components/Header'
import Dash  from '../Components/Dash'
import Product from '../Components/Product'
import Trending from '../Components/Trending'
import Footer from '../Components/Footer'


function Home() {
  return (
    <div className='lg:w-full w-[206%] flex flex-col items-center'>
      <div className='w-full'>

       <Header/>
      </div>
      <div className='pt-[10vh]'>
      <Dash/>

      </div>
       <Product/>
       <Trending/>
       <Footer/>
    </div>
    
  )
}

export default Home