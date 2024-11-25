const mongoose = require('mongoose');

const saleDetailSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },

}, {
  timestamps: true,
});

const SaleDetail = mongoose.model('SaleDetail', saleDetailSchema);

module.exports = SaleDetail;
