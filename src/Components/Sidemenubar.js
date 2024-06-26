import React, { useState } from "react";

function Sidemenubar() {
  const [showProduct, setShowProduct] = useState(0);
  const dropdownProductData = () => {
    if (showProduct == 1) {
      setShowProduct(0);
    } else {
      setShowProduct(1);
    }
  };
  return (
    <div className="w-[25%] z-10 h-[100vh] lg:hidden flex flex-col bg-white fixed pt-8 px-4 gap-10 ">
      <div className="w-[100%] h-[5vh] flex justify-between items-center">
        <label className="text-[25px] text-[orange]">X</label>
        <img
          className="h-[30px] w-[80px]"
          src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/logo.png"
        ></img>
        <div className="flex flex-col gap-[1px]">
          <div className="w-[6px] h-[6px] bg-orange-500 rounded-full"></div>
          <div className="w-[6px] h-[6px] bg-orange-500 rounded-full"></div>
          <div className="w-[6px] h-[6px] bg-orange-500 rounded-full"></div>
        </div>
      </div>
      <div className="w-[100%] flex flex-col gap-5 ">
        <div className="w-[100%] h-[7vh] px-2 rounded-lg bg-blue-950 text-white flex items-center gap-2">
          <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/dashboard.svg"></img>
          <label className="text-[13px]">Dashboard</label>
        </div>
        {/* ----------------------------------------product--------------------------------------------- */}

        <div
          onClick={() => dropdownProductData()}
          style={{ height: showProduct == 1 ? "28vh" : "7vh" }}
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
                  transform: showProduct == 1 ? "roatate(90deg)" : null,
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
                <label className="text-[12px]">Product List</label>
              </div>

              <div className="flex gap-5 items-center px-2">
                <div className="w-[8px] h-[8px] border rounded-full"></div>
                <label className="text-[12px]">Add Product</label>
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
  );
}

export default Sidemenubar;
