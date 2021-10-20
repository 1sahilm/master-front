import mongoose from 'mongoose';

const sofaSchema = mongoose.Schema({
  product_name: { type: String, required: false },
  description: { type: String, required: false },
  size: { type: String, required: false },
  price: { type: Number, required: false },
  images: { type: Array, required: false },
  category: { type: String, required: false },
  timestamp: String,
});

module.exports = mongoose?.models?.sofa || mongoose.model('sofa', sofaSchema);
