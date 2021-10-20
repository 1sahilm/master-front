import mongoose from "mongoose";

const headboardSchema = mongoose.Schema({
  category: { type: String, required: false },
  product_name: { type: String, required: false },
  description: { type: String, required: false },
  size: { type: String, required: false },
  price: { type: Number, required: false },
  images: { type: Array, required: false },
  timestamp: String,
});

module.exports =
  mongoose?.models?.headboard || mongoose.model("headboard", headboardSchema);
