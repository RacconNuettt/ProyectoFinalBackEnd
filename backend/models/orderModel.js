const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderDetails: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderDetail',
    required: true,
  }],
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

orderSchema.methods.calculateTotal = async function () {
  const details = await OrderDetail.find({ _id: { $in: this.orderDetails } });
  this.totalAmount = details.reduce((total, detail) => total + detail.quantity * detail.price, 0);
  return this.totalAmount;
};


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
