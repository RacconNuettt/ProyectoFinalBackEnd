const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  dishCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DishCategory',
    required: true,
  },
  drinkCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DrinkCategory'
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
    required: true,
  },

}, {
  timestamps: true,
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
