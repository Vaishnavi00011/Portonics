import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Products() {
  useEffect(()=>{getProductData()}, [])
  const navigate = useNavigate();
  const [productList, setProductList] = useState([])

//   ---------------------------Get Function---------------------
const getProductData = ()=>{
    axios.get("http://localhost:5001/api/product").then((res)=>setProductList(res.data.data))
}


  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <Header></Header>
      </div>
      <div className="w-full h-[90vh]">
        <img
          className=" w-full h-[85vh] object-cover"
          src="https://www.portronics.com/cdn/shop/collections/1a71fd00cfacd2439053ac092d90e2c2_1728x.jpg?v=1710329257"
        ></img>
      </div>
      {localStorage.getItem("categoryname")}
      <div className="w-[100%] h-[10vh] flex justify-end px-8 bg-[] mt-[-35px]">
        <select className=" border-b-2 border-black pb-3 h-[6vh] w-[20%]  ">
          <option>Best selling</option>
          <option>Sort</option>
          <option>Featured</option>
          <option>Best selling</option>
          <option>Alphabetically,A-Z</option>
          <option>Alphabetically,Z-A</option>
          <option>Price low to high</option>
          <option>Price high to low</option>
          <option>Date old to new</option>
          <option>Date, new to old</option>
        </select>
      </div>
      <div className="w-[100%] flex flex-wrap gap-x-3">
        {productList.filter((i)=> i.category == localStorage.getItem("categoryname")).map((i)=>
        <div
          onClick={() => {localStorage.setItem('productInfo', JSON.stringify(i)) ;navigate("/product-detail")}}
          className="w-[23%] h-[75vh] flex   gap-5"
        >
          <div className="h-[80vh] w-[100%] gap-3 flex flex-col items-center justify-center relative cursor-pointer ">
            <img
              className="h-[50vh] w-[100%]"
              src={i.mainImage}
            ></img>
            <div className="h-[28px] w-[85px] bg-[#AEAEAE] absolute text-[13px]  text-white flex items-center justify-center top-[45px]  right-0">
              Save {i.discount}%
        
            </div>
            <label className="text-[18px]">{i.productName}</label>
            <div className="flex gap-3 items-center justify-center">
              <label className="text-[20px] font-semibold"> ₹{Math.trunc(i.price*i.discount/100).toLocaleString()}</label>
              <label className="text-[13px] line-through"> ₹{i.price.toLocaleString()}</label>
            </div>
          </div>

         
        </div>
        )}
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Products;
