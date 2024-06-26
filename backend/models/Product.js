const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
     category : String,
     productName: String,
     price: Number,
     discount : Number,
     rating: Number,
     mainImage : String,
     images: Array
    })

module.exports = mongoose.model("Product", ProductSchema);