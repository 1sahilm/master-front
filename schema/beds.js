import mongoose from "mongoose";

const bedSchema = mongoose.Schema({
  product_name: { type: String, required: false },
  description: { type: String, required: false },
  size: { type: String, required: false },
  price: { type: Number, required: false },
  mattresses_images: { type: Array, required: false },
  feet_images: { type: Array, required: false },
  images: { type: Array, required: false },
  category: { type: String, required: false },
  timestamp: String,
});

module.exports = mongoose?.models?.beds || mongoose.model("beds", bedSchema);
