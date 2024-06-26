import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showProduct, setShowProduct] = useState(0);
  const navigate = useNavigate()
  const dropdownProductData = () => {
    if (showProduct == 1) {
      setShowProduct(0);
    } else {
      setShowProduct(1);
    }
  };
  const [bar, setBar] = useState(0);
  const moveBar = () => {
    if (bar == 1) {
      setBar(0);
    } else {
      setBar(1);
    }
  };
  return (
    <div className=" h-[10vh] ">
      <div className="shadow h-[10vh] bg-[white] hidden lg:flex justify-end items-center gap-7 px-8">
        <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/search.svg"></img>
        <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/flags/us1.png"></img>
        <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/notification-bing.svg"></img>
        <div className="w-[40px] h-[40px] rounded-full flex">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/profiles/avator1.jpg"
          ></img>
          <div className="w-[10px] h-[10px] bg-green-400 rounded-full "></div>
        </div>
      </div>
      <div className="h-[10vh] shadow shadow-gray-500 bg-[white] items-center  lg:hidden flex justify-between px-4">
        <div
          onClick={() => moveBar()}
          className={`hambar ${bar == 1 ? "cross" : "hambar"} `}
        >
          <div style={{ opacity: bar == 0 ? 1 : 0 }} className="middle"></div>
        </div>
        <img
          className="h-[5vh]"
          src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/logo.png"
        ></img>
        <div className="flex flex-col gap-1">
          <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
          <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
          <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
        </div>
      </div>
      {/* ----------------------Sidebar--------------------------------------------- */}

      <div
        style={{ transform: bar == 1 ? "translateX(0%)" : "translateX(-100%)" }}
        className="w-[100%] transition-all duration-500 z-10 h-[100vh] lg:hidden flex flex-col bg-white fixed pt-8 top-[10.5vh] px-4 gap-10 "
      >
        <div className="w-[100%] flex flex-col gap-5 ">
          <div className="w-[100%] h-[7vh] px-2 rounded-lg bg-blue-950 text-white flex items-center gap-2">
            <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/dashboard.svg"></img>
            <label className="text-[13px]">Dashboard</label>
          </div>
          {/* ----------------------------------------product--------------------------------------------- */}

          <div
            onClick={() => dropdownProductData()}
            style={{ height: showProduct == 1 ? "19vh" : "7vh" }}
            className="h-[10vh] rounded-lg transition-all duration-500 overflow-hidden "
          >
            <div
              className={`h-[7vh] w-[100%] text-gray-400 hover:text-white hover:bg-blue-950 px-2 rounded-lg ${
                showProduct == 1 ? "text-white" : "text-black"
              } ${
                showProduct == 1 ? "bg-blue-950" : "bg-white"
              }  flex   justify-between items-center`}
            >
              <div className="flex gap-2 items-center ">
                <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
                <label className="text-[13px] ">Product</label>
              </div>
              <div>
                <i
                  style={{
                    transform: showProduct == 1 ? "rotate(90deg)" : null,
                  }}
                  className="fa fa-angle-right transition-all duration-500  hover:text-white"
                  aria-hidden="true"
                ></i>
              </div>
            </div>

            {/* -------------------------------------------product-div--------------------------------- */}
            <div className="mt-5">
              <div className="w-[100%]  flex flex-col gap-5 ">
                <div className="flex gap-5 items-center px-2">
                  <div className="w-[8px] h-[8px] border rounded-full"></div>
                  <label onClick={()=>navigate('/dashboard/product-list')} className="text-[12px]">Product List</label>
                </div>

                <div className="flex gap-5 items-center px-2">
                  <div className="w-[8px] h-[8px] border rounded-full"></div>
                  <label onClick={()=>navigate('/dashboard/addproduct')} className="text-[12px]">Add Product</label>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------sales------------------------------------------------              */}

          <div className="w-[100%] h-[7vh] px-2 rounded-lg  flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/sales1.svg"></img>
              <label className="text-[13px] text-gray-400">Sales</label>
            </div>
            <i
              className="fa fa-angle-right transition-all duration-500 text-gray-400 hover:text-white"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
