const mongoose = require('mongoose');

const flashSchema = new mongoose.Schema({
  manufacturer: { type: String, required: true },
  memorySize: { type: Number, required: true },
  warrantyPeriod: { type: Number, required: true }, 
  stockQuantity: { type: Number, required: true }
});

module.exports = mongoose.model('Flash', flashSchema);