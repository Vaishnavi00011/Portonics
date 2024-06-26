import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import axios from "axios";

function AddProduct() {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [rating, setRating] = useState(0);
  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);
  const [image, setImage] = useState("");

  // ------------------Post Function----------------------------------
  const postProductData = () => {
    const item = {
      category: category,
      productName: productName,
      price: price,
      rating: rating,
      mainImage: mainImage,
      images: images,
      discount: discount,
    };
    axios
      .post("http://localhost:5001/api/product", item)
      .then(() => alert("Done"));
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar></Navbar>
        {/* ----------------------Content------------------------------------- */}
        <div className="w-[100%] lg:pt-5 pt-3 flex flex-col gap-4 lg:px-8 px-4">

          <div className="flex flex-col lg:items-start items-center">
            <h1 className="font-semibold lg:text-[18px] text-[15px]">Product Add</h1>
            <label className="lg:text-[14px] text-[12px]">Create new product</label>
          </div>

          <div className="flex w-[100%] lg:gap-0 gap-5 lg:flex-wrap lg:flex-row flex-col  lg:pt-10 pt-5 border border-gray-200 lg:h-[80vh] h-[140vh] rounded-xl">
            <div className="flex flex-col lg:gap-4 gap-3  h-[15vh] lg:w-[30%] w-[100%] px-3">
              <label className="text-[14px] lg:font-normal font-semibold">Category</label>
              <input
                onChange={(e) => setCategory(e.target.value)}
                className="lg:w-[90%] w-[100%] h-[6vh] active:outline outline-orange-400 border border-gray-300 rounded pl-2"
                placeholder=""
              ></input>
            </div>

            <div className="flex flex-col lg:gap-4 gap-3  h-[15vh] lg:w-[30%] w-[100%]  px-3">
              <label className="text-[14px] lg:font-normal font-semibold">Product name</label>
              <input
                onChange={(e) => setProductName(e.target.value)}
                className="lg:w-[80%] w-[100%] h-[7vh] rounded border border-gray-300 active:outline outline-orange-400 pl-2"
                placeholder=""
              ></input>
            </div>

            <div className="flex flex-col lg:gap-4 gap-3  h-[15vh] lg:w-[30%] w-[100%] px-3">
              <label className="text-[14px] lg:font-normal font-semibold">Price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                className="lg:w-[80%] w-[100%] h-[7vh] rounded border border-gray-300 active:outline outline-orange-400 pl-2"
                placeholder=""
              ></input>
            </div>

            <div className="flex flex-col lg:gap-4 gap-3  h-[15vh] lg:w-[30%] w-[100%] px-3">
              <label className="text-[14px] lg:font-normal font-semibold">Discount</label>
              <input
                onChange={(e) => setDiscount(e.target.value)}
                className="lg:w-[80%] w-[1005] h-[7vh] rounded border border-gray-300 active:outline outline-orange-400 pl-2"
                placeholder=""
              ></input>{" "}
            </div>

            <div className="flex flex-col lg:gap-4 gap-3  h-[15vh] lg:w-[30%] w-[100%] px-3">
              <label className="text-[14px] lg:font-normal font-semibold">Rating</label>
              <input
                onChange={(e) => setRating(e.target.value)}
                className="lg:w-[80%] w-[100%] h-[7vh] rounded border border-gray-300 active:outline outline-orange-400 pl-2"
                placeholder=""
              ></input>
            </div>

            <div className="flex flex-col lg:gap-4 gap-3  h-[15vh] lg:w-[30%] w-[100%] px-3">
              <label className="text-[14px] lg:font-normal font-semibold">Main image</label>
              <input
                onChange={(e) => setMainImage(e.target.value)}
                className="lg:w-[80%] w-[100%] h-[7vh] rounded border border-gray-300 active:border-none active:outline outline-[0.5px] outline-orange-400 pl-2"
                placeholder=""
              ></input>
            </div>
            <div className="flex flex-col lg:gap-4 gap-3  h-[15vh] lg:w-[30%] w-[100%] px-3">
              <label className="text-[14px] lg:font-normal font-semibold"> Image</label>
              <div className="flex gap-4">
                <input
                  onChange={(e) => setImage(e.target.value)}
                  className="lg:w-[80%] w-[100%] h-[7vh] rounded border border-gray-300 "
                  placeholder=""
                ></input>
                <button
                  onClick={() => setImages([...images, image])}
                  className="w-[25%] h-[7vh] rounded text-[15px] border border-gray-300"
                >
                  Add
                </button>
              </div>
            </div>
            {/* <div>{images.length}</div> */}
            <div className="lg:font-normal font-semibold w-full flex pl-2 pt-3 lg:gap-4 gap-3">
          <button
            onClick={() => postProductData()}
            className="lg:w-[12%] w-[20%] lg:h-[8vh] h-[6vh] rounded-lg  bg-orange-400 text-[white] text-[16px]"
          >
            Submit
          </button>
          <button className="lg:w-[12%] w-[20%] lg:h-[8vh] h-[6vh] rounded-lg bg-slate-600 text-[white] text-[16px]">
            Cancel
          </button>
        </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default AddProduct;
