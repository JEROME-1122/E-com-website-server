import express from "express";

import {
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controller/productController.js";

const router = express.Router();

// router.get("/product/:id", getSingleProduct);
// router.get("/products", getAllProducts);
// router.post("/addProduct", addProduct);

//function chaining (above 2 line we can be do same endpoind  get and post method)

router.route("/products").get(getAllProducts).post(addProduct);
router
  .route("/product/:id")
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
