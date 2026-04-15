import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: [true, "Please enter public id for the image"],
      },
      url: {
        type: String,
        required: [true, "Please enter URL for the image"],
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: [true, "Please enter name of the reviewer"],
      },
      rating: {
        type: Number,
        required: [true, "Please enter rating for the product"],
      },
      comment: {
        type: String,
        required: [true, "Please enter comment for the product"],
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.model("Product", productSchema);