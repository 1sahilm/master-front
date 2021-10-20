import mongoose from 'mongoose';

const mattressSchema = mongoose.Schema({
  product_name: { type: String, required: false },
  description: { type: String, required: false },
  size: { type: String, required: false },
  price: { type: Number, required: false },
  images: { type: String, required: false },
  category: { type: String, required: false},
  timestamp: String,
});

module.exports = mongoose?.models?.mattress || mongoose.model('mattress', mattressSchema);
