const mongoose = require('mongoose');

const TypeDishSchema = new mongoose.Schema({
  typeName: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const TypeDish = mongoose.model('TypeDish', TypeDishSchema);

module.exports = TypeDish;
