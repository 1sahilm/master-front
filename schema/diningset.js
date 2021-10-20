import mongoose from 'mongoose';

const diningsetSchema = mongoose.Schema({
  product_name: { type: String, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: false },
  images: { type: String, required: false },
  category: { type: String, required: false },
  timestamp: String,
});

module.exports = mongoose?.models?.diningset || mongoose.model('diningset', diningsetSchema);
