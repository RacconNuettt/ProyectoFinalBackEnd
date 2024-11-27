const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  dish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dish',
    required: null,
  },
  quantity: {
    type: Number,
    default: true,
  },

  drink: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drink',
    default: null,
  },
  drinkQuantity: {
    type: Number,
    required: true,
  },

  provider: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Provider',
  required: true,
  }
}, {
  timestamps: true,
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
