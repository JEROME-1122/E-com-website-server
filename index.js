import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the e-commerce API" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
