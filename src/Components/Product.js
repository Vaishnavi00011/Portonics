import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate()
  return (
    <div className=" w-[100%] flex flex-col gap-8 lg:pt-10 pt-20 lg:items-start items-center justify-center">
      <h1 className=" text-[#334F60] lg:text-[40px] text-[70px] font-bold px-8">
        FIND YOUR FIT
      </h1>
      <div className="w-[100%] flex flex-col items-center justify-center gap-10 bg-[]">
        <div  className="flex flex-wrap lg:justify-center w-[100%] ">
          <div onClick={()=>{localStorage.setItem("categoryname" , "Party Speaker") ;navigate('/products')}} className="img1 lg:w-[30%] w-[100%]">
            <img className="w-[100%]" src="https://www.portronics.com/cdn/shop/files/Artboard_1_f457d135-5e48-4770-9878-5f2e78b27f37.png?v=1701513995"></img>
          </div>
          <div onClick={()=>{localStorage.setItem("categoryname", "Soundbars"); navigate('/products')}} className=" img1 lg:w-[30%] w-full ">
            <img className="w-[100%]" src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_4572f99f-fe35-4dfd-ae93-a67ca8f5037e.png?v=1701514371"></img>
          </div>
          <div className=" img1 lg:w-[30%] w-full ">
            <img className="w-[100%]" src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_2_3267a377-faaf-494a-b91c-ff82ea3d7ce1.png?v=1701514134"></img>
          </div>
        {/* </div> */}
        {/* <div className="flex   justify-center  w-[100%] bg-[]"> */}
          <div className=" img1 lg:w-[30%] w-full ">
            <img className="w-[100%]" src="https://www.portronics.com/cdn/shop/files/projector-desktop.png?v=1689598023"></img>
          </div>
          <div className=" img1 lg:w-[30%] w-full ">
            <img className="w-[100%]" src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_8_32a6535d-b0d8-4673-a157-6302ff3405e3.png?v=1701514228"></img>
          </div>
          <div className=" img1 lg:w-[30%] w-full">
            <img className="w-[100%]" src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_4_014a02e0-ab13-4131-bc6e-97fcc7827269.png?v=1701514311"></img>
          </div>
        {/* </div> */}
        {/* <div className="flex justify-center  w-[100%] bg-[]"> */}
          <div className=" img1 lg:w-[30%] w-full">
            <img className="w-[100%]" src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_12.png?v=1701761908"></img>
          </div>
          <div className=" img1 lg:w-[30%] w-full ">
            <img className="w-[100%]" src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_13.png?v=1701761957"></img>
          </div>
          <div className=" img1 lg:w-[30%] w-full ">
            <img className="w-[100%]" src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_5_08bd024c-9424-4619-96a4-afa997650650.png?v=1701762125"></img>
          </div>
        {/* </div> */}
        {/* <div className="flex justify-center  w-[100%] bg-[]"> */}
          <div className=" img1 lg:w-[30%] w-full ">
            <img className="w-[100%]" src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_11.png?v=1701761835"></img>
          </div>
          <div className=" img1 lg:w-[30%] w-full ">
            <img className="w-[100%]"  src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_9.png?v=1701762219"></img>
          </div>
          <div className=" img1 lg:w-[30%] w-full ">
            <img className="w-[100%]"  src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_14.png?v=1701762261"></img>
          </div>
        {/* </div> */}

        {/* <div className="flex justify-center h-[65vh] w-[100%] bg-[]"> */}
          <div className=" img1 lg:w-[30%] w-full ">
            <img className=" w-[100%]"  src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_10.png?v=1701761786"></img>
          </div>
          <div className=" img1 lg:w-[30%] w-full  bg-[] ">
            <img className=" w-[100%]" src="https://www.portronics.com/cdn/shop/files/Artboard_1_copy_8.png?v=1668061763"></img>
          </div>
          <div className="img1 lg:w-[30%] w-full ">
            <img className=" w-[100%]" src="https://www.portronics.com/cdn/shop/files/Mobile_15549a39-8941-4741-86ac-abb352f58752.png?v=1672402972"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
