import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function ProductDetail() {
  const productInfo = JSON.parse(localStorage.getItem("productInfo"));
  return (
    <div className="">
      
      <Header></Header>
     
      
      <div className="w-[100%] flex justify-between gap-20 pt-28 px-10 bg-[]  ">
        <div className="w-[40%] h-[90vh]">
          <img className="w-[100%] h-[70vh] " src={productInfo.mainImage}></img>
          <div className="flex gap-4 w-[100%] cursor-pointer ">
            {productInfo.images.map((i)=>
            <img
              className="w-[17%] h-[13vh] rounded-[3px] relative"
              src={i}
            ></img>
          )}
           </div>
        </div>
        <div className="w-[60%] h-[90vh] flex flex-col gap-5 bg-[]">
          <div className="w-[60%] h-[90vh] flex flex-col gap-5">
            <h1 className="text-[24px] font-bold cursor-text">
              {productInfo.productName}
            </h1>

            <div className="flex gap-1 items-center">
              <i class="fa fa-star-o text-[orange]" aria-hidden="true"></i>
              <i class="fa fa-star-o text-[orange]" aria-hidden="true"></i>
              <i class="fa fa-star-o text-[orange]" aria-hidden="true"></i>
              <i class="fa fa-star-o text-[orange]" aria-hidden="true"></i>
              <i class="fa fa-star-o text-[orange]" aria-hidden="true"></i>
              <label className="text-[14px]">
                {productInfo.rating}(117 review)
              </label>
            </div>
            <div className="flex gap-3 items-center">
              <label className="text-[24px] font-semibold">
                ₹{" "}
                {(
                  (productInfo.price * productInfo.discount) /
                  100
                ).toLocaleString()}
              </label>
              <label className="text-[18px] line-through">
                ₹ {productInfo.price.toLocaleString()}
              </label>
            </div>
            {/* <div className='w-[55%] h-[11vh] border-[2px] flex flex-col justify-center gap-1 rounded-2xl border-black'>
                <div className='flex  gap-2'>
                <label className='text-[15px] font-semibold'>or 3 monthly payments of ₹1233 with  </label>
                <img className='w-[35px] h-[20px]' src='https://assets.snapmint.com/assets/checkout/snapmint_mono_logo_green.png'></img>
                </div>
                
                
                <label className='text-[10px] text-gray-400 font-semibold'>UPI & Cards Accepted, Online approval in 2 minutes <button className='w-[100px] h-[20px] border text-[12px] font-semibold rounded-3xl text-white bg-[black]'>BUY ON EMI</button> </label>
                </div> */}
            <label className="text-[12px] mt-[-10px] cursor-text">
              Inclusive of all taxes.
            </label>

            <button className="w-[80%] h-[8vh] rounded-[60px] border-[2px] border-black cursor-pointer">
              {" "}
              Add to Cart
            </button>
            <button className="w-[80%] h-[8vh] rounded-[60px] border border-black text-white bg-[black] cursor-pointer">
              Buy it Now
            </button>
          </div>
          
          <div className="w-[100%] flex flex-col gap-5 pt-28 bg-[]">
            <div className="flex gap-2 items-center">
              <i
                class="fa fa-tag text-green-700 text-[20px]"
                aria-hidden="true"
              ></i>
              <h1 className=" font-bold cursor-text">Offers Available</h1>
            </div>
            <div className="w-[90%] h-[12vh] border border-gray-400 flex items-center justify-between px-4 bg-[]">
              <div className="w-[70%] h-[10vh] flex gap-6 items-center bg-[]">
                <img
                  className="w-[20%] h-[6vh]"
                  src="https://www.portronics.com/cdn/shop/files/UPI_Image.jpg?v=1686768611"
                ></img>
                <label className="text-[13px] cursor-text">
                  5% Extra Discount on Prepaid Orders
                </label>
              </div>
              <label className="text-[12px] text-blue-600 cursor-pointer">
                *T&C
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-[100%] h-[20vh] mt-14  flex items-center justify-center gap-3 text-[16px] ">
        <label className=" border-b-2 pt-2 pb-1 border-black cursor-pointer">
          Description
        </label>
        <label className=" cursor-pointer">More Information</label>
        <label className=" cursor-pointer">Specification</label>
      </div>

     

      <Footer></Footer>
    </div>
  );
}

export default ProductDetail;
