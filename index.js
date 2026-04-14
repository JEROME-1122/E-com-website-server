import express from "express";
const app = express();
import dotenv from "dotenv";
import productRoutes from "./routes/productRoute.js";
dotenv.config();
const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the e-commerce API" });
});


// Routes
app.use(express.json());
app.use("/api", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
