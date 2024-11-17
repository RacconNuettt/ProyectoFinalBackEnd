const mongoose = require('mongoose'); 

const dishSchema = new mongoose.Schema({
    dishCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DishCategory',
        required: true,
    },
    dishname: {
        type: String,
        required: true,
    },   
    
    dishprice: {
        type: Number,
        required: true,
    },   
}, {
    timestamps: true,
})

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;