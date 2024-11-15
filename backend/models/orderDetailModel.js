const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({
  drink: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drink',
    required: true,
  },
  dish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dish',
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  specialInstructions: String,

}, {
  timestamps: true,
});

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

module.exports = OrderDetail;
