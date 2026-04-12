import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;

const getAllProducts = (req, res) => {
  const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 5.99 },
  ];
  res.status(200).json(products);
};
const getSingleProduct = (req, res) => {
  const product = { id: 1, name: "Product 1", price: 10.99 };
  res.status(200).json(product);
};

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the e-commerce API" });
});

app.get("/products", getAllProducts);
app.get("/product", getSingleProduct);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
