const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderDetails: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderDetail',
    required: true,
  }],
  orderDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Pending', 'Preparing', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
  totalAmount: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
