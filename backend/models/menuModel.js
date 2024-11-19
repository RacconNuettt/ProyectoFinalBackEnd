const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  dishes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dish'
  }],
  drinks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drink'
  }],
  stock: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stock',
    required: true,
  },
}, {
  timestamps: true,
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
