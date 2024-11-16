const mongoose = require ('mongoose');

const dishCategorySchema = new mongoose.Schema({
    dishCategoryname:{
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const DishCategory = mongoose.model('DishCategory', dishCategorySchema);

module.exports = DishCategory;