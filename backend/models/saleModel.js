const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  saleDetails: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SaleDetail',
    required: true,
  }],
  saleDate: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['Efectivo', 'Tarjeta de debito', 'Sinpe Movil'],
    default: 'Efectivo',
    required: true,
  },

}, {
  timestamps: true,
});

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;
