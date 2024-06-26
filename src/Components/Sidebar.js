import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidemenubar from "./Sidemenubar";

function Sidebar() {
  const navigate = useNavigate();
  const [showProduct, setShowProduct] = useState(0);
  const dropdownProductData = () => {
    if (showProduct == 1) {
      setShowProduct(0);
    } else {
      setShowProduct(1);
    }
  };
  const dropdownSalesData = () => {
    if (showProduct == 2) {
      setShowProduct(0);
    } else {
      setShowProduct(2);
    }
  };
  const dropdownorderData = () => {
    if (showProduct == 3) {
      setShowProduct(0);
    } else {
      setShowProduct(3);
    }
  };
  const dropdownExpanceData = ()=>{
    if(showProduct==4){
      setShowProduct(0)
    }else{
      setShowProduct(4)
    }
  }

  return (
      <div className="h-[100vh] overflow-y-auto w-[25%]  px-4 lg:flex hidden flex-col gap-4">
        <div className="flex gap-2 items-center justify-between  ">
          <img
            className="h-[8vh] w-[60%]"
            src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/logo.png"
          ></img>
          <div className="h-[20px] w-[20px] border-blue-950 rounded-full border-2 flex items-center justify-center ">
            <div className="h-[7px] w-[7px]  border-blue-950 rounded-full border-2"></div>
          </div>
        </div>

        {/* ------------------------------Dashboard------------------------------------------------ */}

        <div className="flex flex-col gap-3">
          <div className="h-[8vh] w-[100%] text-white flex items-center gap-2 bg-blue-950 px-4 rounded-lg ">
            <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/dashboard.svg"></img>
            <label className="text-[18px]">Dashboard</label>
          </div>

          <div
            onClick={() => dropdownProductData()}
            className=" h-[8vh] overflow-hidden  transition-all duration-500"
            style={{ height: showProduct == 1 ? "21vh" : "8vh" }}
          >
            <div
              className={`flex gap-2 h-[8vh] w-[100%] ${
                showProduct == 1 ? "text-white" : "text-black"
              } ${
                showProduct == 1 ? "bg-blue-950" : "bg-white"
              } items-center hover:bg-blue-950 hover:text-white px-4 rounded-lg justify-between cursor-pointer `}
            >
              <div className="flex items-center gap-2 h-[5vh] w-[10%]">
                <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
                <label>Product</label>
              </div>
              <div>
                <i
                  style={{
                    transform: showProduct == 1 ? "rotate(90deg)" : null,
                  }}
                  className="fa fa-angle-right transition-all duration-500 hover:text-white"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            {/* ------Product----- */}
            <div className=" mt-5">
              <div className="pl-4 flex flex-col gap-4  ">
                <div
                  onClick={() => navigate("/dashboard/product-list")}
                  className="flex items-center gap-3 div-hover   "
                >
                  <div className="h-[10px] w-[10px] rounded-full border border-gray-400 round cursor-pointer "></div>
                  <label className=" cursor-pointer text-[14px]">
                    Product List
                  </label>
                </div>
                <div
                  onClick={() => navigate("/dashboard/addproduct")}
                  className="flex items-center gap-3 div-hover "
                >
                  <div className="h-[10px] w-[10px] rounded-full border border-gray-400 round cursor-pointer "></div>
                  <label className=" cursor-pointer text-[14px]">
                    Add Product
                  </label>
                </div>
              </div>
            </div>
          </div>
{/* ----------------------------------sales---------------------- */}
          <div
            onClick={() => dropdownSalesData()}
            className="  h-[8vh] overflow-hidden transition-all duration-500  "
            style={{ height: showProduct == 2 ? "20vh" : "8vh" }}
          >
            <div
              className={`flex gap-2 h-[8vh] w-[100%] ${
                showProduct == 2 ? "text-white" : "text-black"
              } ${
                showProduct == 2 ? "bg-blue-950" : "bg-white"
              }    text-black  items-center hover:bg-blue-950 hover:text-white px-4 rounded-lg  justify-between cursor-pointer `}
            >
              <div className="flex items-center gap-2 h-[5vh] w-[10%]">
                <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/sales1.svg"></img>
                <label>Sales</label>
              </div>

              <div>
                <i
                  class="fa fa-angle-right transition-all duration-500"
                  aria-hidden="true"
                  style={{
                    transform: showProduct == 2 ? "rotate(90deg)" : null,
                  }}
                ></i>
              </div>
            </div>

            {/* ------Sales----- */}
            <div>
              <div className="pl-4 pt-3 ">
                <div className="flex items-center gap-2 div-hover ">
                  <div className="h-2 w-2 rounded-full border border-gray-400  round cursor-pointer"></div>
                  <label className="cursor-pointer">Sales List</label>
                </div>
                <div className="flex items-center gap-2 div-hover">
                  <div className="h-2 w-2 rounded-full border border-gray-400  round cursor-pointer"></div>
                  <label className="  cursor-pointer">POS</label>
                </div>
              </div>
            </div>
          </div>
{/* ------------------------order------------------------------------ */}

          <div
            onClick={() => dropdownorderData()}
            className=" h-[8vh] overflow-hidden  transition-all duration-500"
            style={{ height: showProduct == 3 ? "21vh" : "8vh" }}
          >
            <div
              className={`flex gap-2 h-[8vh] w-[100%] ${
                showProduct == 1 ? "text-white" : "text-black"
              } ${
                showProduct == 1 ? "bg-blue-950" : "bg-white"
              } items-center hover:bg-blue-950 hover:text-white px-4 rounded-lg justify-between cursor-pointer `}
            >
              <div className="flex items-center gap-2 h-[5vh] w-[10%]">
                <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
                <label>Order</label>
              </div>
              <div>
                <i
                  style={{
                    transform: showProduct == 3 ? "rotate(90deg)" : null,
                  }}
                  className="fa fa-angle-right transition-all duration-500 hover:text-white"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            {/* ------order----- */}
            <div className=" mt-5">
              <div className="pl-4 flex flex-col gap-4  ">
                <div onClick={()=>navigate('/dashboard/order-list')}
                 className="flex items-center gap-3 div-hover">
                  <div className="h-[10px] w-[10px] rounded-full border border-gray-400 round cursor-pointer "></div>
                  <label className=" cursor-pointer text-[14px]">Order List</label>
                </div>
                <div className="flex items-center gap-3 div-hover">
                  <div className="h-[10px] w-[10px] rounded-full border border-gray-400 round cursor-pointer "></div>
                  <label className=" cursor-pointer text-[14px]">Order List</label>
                </div>
              </div>
            </div>
          </div>


 {/* -------------------------------------expanse-----------------------------------*/}
     <div 
     onClick={()=>dropdownExpanceData()}
     className="h-[8vh] overflow-hidden transition-all duration-500"
     style={{height : showProduct==4 ? "25vh" : "8vh"}}
     >
          <div className={`flex gap-2 h-[8vh] w-[100%]   items-center ${showProduct == 4 ? "bg-blue-950" : "bg-white"} ${showProduct == 4 ? "text-white" : "text-black"} hover:bg-blue-950   hover:text-white  px-4 rounded-lg  justify-between cursor-pointer `}>
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/expense1.svg"></img>
              <label>Expanse</label>
            </div>

            <div>
              <i style={{transform : showProduct == 4 ? "rotate(90deg)" : null}} class="fa fa-angle-right transition-all duration-500" aria-hidden="true"></i>
            </div>
          </div>

{/* ----------expance-div----------- */}
<div className="mt-5">
  <div className="flex flex-col gap-4 pl-2">
      <div className="flex gap-2 items-center div-hover">
        <div className="w-[10px] h-[10px] border border-gray-400 rounded-full round"></div>
        <label  className="text-[14px]">Expance</label>
      </div>
      
      <div className="flex gap-2 items-center div-hover ">
        <div className="w-[10px] h-[10px] border border-gray-400 rounded-full round"></div>
        <label className="text-[14px]">Expance</label>
      </div>


      </div>
    </div>







    </div>


{/* -----------------------------------Quetation--------------------------------------- */}
          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black   items-center  px-4 rounded-lg justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/quotation1.svg"></img>
              <label>Quotation</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            </div>
    







          

          <div className="flex gap-2 h-[8vh] w-[100%]   hover:bg-blue-950 hover:text-white bg-white text-black  items-center px-4 rounded-lg justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/transfer1.svg"></img>
              <label>Transfer</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]   hover:bg-blue-950 hover:text-white bg-white text-black   items-center  px-4 rounded-lg justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/return1.svg"></img>
              <label>Return</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]   hover:bg-blue-950 hover:text-white bg-white text-black   items-center  px-4 rounded-lg  justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/users1.svg"></img>
              <label>People</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black items-center px-4 rounded-lg  justify-between cursor-pointer  ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/places.svg"></img>
              <label>Places</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black  items-center px-4 rounded-lg  ">
            <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
            <label>Components</label>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black  items-center px-4 rounded-lg  ">
            <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
            <label>Blank Page</label>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black  items-center px-4 rounded-lg  justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[55%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
              <label>Error Pages</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black   items-center  px-4 rounded-lg  justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
              <label>Elements</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%] hover:bg-blue-950 hover:text-white bg-white text-black  items-center  px-4 rounded-lg  justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
              <label>Charts</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black  items-center px-4 rounded-lg  justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
              <label>Icons</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black   items-center px-4 rounded-lg  justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
              <label>Forms</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black    items-center px-4 rounded-lg  justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
              <label>Table</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black    items-center   px-4 rounded-lg  justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
              <label>Application</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black    items-center  px-4 rounded-lg  justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
              <label>Report</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black items-center  px-4 rounded-lg  justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
              <label>Users</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>

          <div className="flex gap-2 h-[8vh] w-[100%]  hover:bg-blue-950 hover:text-white bg-white text-black   items-center   px-4 rounded-lg  justify-between cursor-pointer ">
            <div className="flex items-center gap-2 h-[5vh] w-[10%]">
              <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/product.svg"></img>
              <label>Settings</label>
            </div>

            <div>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Sidebar;
