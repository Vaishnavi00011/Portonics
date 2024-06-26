const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const newproduct = await product.save();

    res.status(200).json({
      data: newproduct,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(400).json({ message: "Product does not exist" });
    }
    product.productname = req.body.productname || product.productname;
    product.number = req.body.number || product.number;
    product.producttype = req.body.producttype || product.producttype;
  
    const updatedProduct = await product.save();

    res.status(200).json({
      data: updatedProduct,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Product is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
