const mongoose = require('mongoose');

const drinkCategorySchema = new mongoose.Schema({
    drinkCategoryname: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const DrinkCategory = mongoose.model('DrinkCategory', drinkCategorySchema);

module.exports = DrinkCategory;