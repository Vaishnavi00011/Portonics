import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Productlist() {
  const navigate = useNavigate();
  useEffect(() => {
    getProductData();
  }, []);
  const [productList, setProductList] = useState([]);
  const getProductData = () => {
    axios
      .get("http://localhost:5001/api/product")
      .then((res) => setProductList(res.data.data));
  };
  const [show, setShow] = useState(0);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />

        {/* ---------------------------------content-----------------------------*/}

        <div className="w-[100%] flex flex-col lg:px-8 px-3">
          <div className="w-[100%] h-[] flex lg:flex-row flex-col lg:items-start items-center lg:pt-10 pt-2 lg:justify-between lg:gap-0 gap-2 ">
            <div className="flex flex-col lg:items-start items-center ">
              <h1 className="font-semibold lg:text-[19px] text-[15px]">Product List</h1>
              <label className="lg:text-[14px] text-[12px] text-gray-600">
                Manage your product
              </label>
            </div>
            <div className=" lg:w-[20%] lg:h-[7vh] w-[50%] h-[5vh] hover:bg-blue-950 cursor-pointer bg-orange-400 text-[white] rounded-lg flex justify-center lg:gap-0 gap-1 items-center">
              <label className="lg:text-[30px] text-[25px] cursor-pointer">+</label>
              <label className="lg:text-[14px] text-[13px] font-semibold cursor-pointer ">
                {" "}
                Add New Product{" "}
              </label>
            </div>
          </div>
          <div className="w-[100%] h-[90vh]   mt-5 border border-gray-300  rounded-lg lg:p-5">
            <div className="w-[100%] h-[] flex lg:flex-row flex-col lg:gap-0 gap-6 lg:items-start items-center justify-between">
              <div className="lg:w-[50%] flex lg:gap-5 gap-3 items-center  ">
                <div className=" lg:w-[35px] w-[50px] lg:h-[35px] h-[35px] border rounded-lg bg-orange-400 flex justify-center items-center">
                  <img src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/filter.svg"></img>
                </div>
                <div className="flex justify-center items-center gap-3 lg:h-[7vh] h-[6vh]  lg:w-[45%] w-[100%] border rounded-md">
                  <i
                    class="fa fa-search text-[gray] text-[12px]"
                    aria-hidden="true"
                  ></i>
                  <input
                    className=" outline-none text-[14px]"
                    placeholder="Search..."
                  ></input>
                </div>
              </div>
              <div className="flex gap-4 w-[50%] lg:justify-end items-center justify-center">
                <img
                  className="w-[20px] h-[20px]"
                  src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/pdf.svg"
                ></img>
                <img
                  className="w-[20px] h-[20px]"
                  src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/excel.svg"
                ></img>
                <img
                  className="w-[20px] h-[20px]"
                  src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/printer.svg"
                ></img>
              </div>
            </div>
            {/* -------------------Table----------------------- */}
            <table className="w-full mt-10   ">
              <thead className="w-[100%]">
                <th className="py-2 text-left">S no.</th>
                <th className="text-left">Product Image</th>
                <th className="text-left">Product Name</th>
                <th className="text-left">Category</th>
                <th className="text-left">Price</th>
                <th className="text-left">Action</th>
              </thead>
              <tbody>
                {productList.map((i, index) => {
                  if (show <= index && index < show + 4) {
                    return (
                      <tr className="border-b w-full hover:bg-orange-50">
                        <td>{index + 1}</td>
                        <td>
                          <img className="w-20 py-2" src={i.mainImage}></img>
                        </td>
                        <td>{i.productName}</td>
                        <td>{i.category}</td>
                        <td>Rs. {i.price.toLocaleString()}</td>
                        <td className="">
                          <img
                            src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/eye.svg"
                            className="inline pr-4"
                          ></img>
                          <img
                            src="https://preadmin.dreamstechnologies.com/html/pos/template/assets/img/icons/edit.svg"
                            className="inline"
                          ></img>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  if (show > 0) {
                    setShow(show - 4);
                  }
                }}
              >
                {"<"}
              </button>
              {productList.map((i, index) => {
                if (index % 4 == 0) {
                  return (
                    <button onClick={() => setShow(0)}>{index / 4 + 1}</button>
                  );
                }
              })}

              <button onClick={() => setShow(show + 4)}>{">"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
