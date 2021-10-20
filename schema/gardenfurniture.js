import mongoose from "mongoose";

const garden_furnitureSchema = mongoose.Schema({
  product_name: { type: String, required: false },
  description: { type: String, required: false },

  //size: { type: String, required: false },

  price: { type: Number, required: false },
  //wood_color:{ type: String,required:false},

  //garden_furniture_wood_images: { type: Array, required: false },
  images: { type: Array, required: false },
 // balck_ash_images: { type: Array, required: false },
  category: { type: String, required: false },

  timestamp: String,
});

module.exports = mongoose?.models?.garden_furniture || mongoose.model("garden_furniture", garden_furnitureSchema);
