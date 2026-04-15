//Create Product Controller
import mongoose from "mongoose";
import Product from "../models/productModel.js";

export const addProduct = async (req, res) => {
  //console.log(req.body);
  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
};

//Get All Products
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
};

//Get Single Product
const getSingleProduct = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Product ID",
    });
  }
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  return res.status(200).json({
    success: true,
    product,
  });
};

//Update product
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Product ID",
    });
  }
  const product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({
    success: true,
    product,
  });
};

//Delete the product

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(500).json({
      success: false,
      message: "Invalid Product ID",
    });
  }
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};

export { getAllProducts, getSingleProduct };
