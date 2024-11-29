const mongoose = require('mongoose'); 

const dishSchema = new mongoose.Schema({
    
    dishName: {
        type: String,
        required: true,
    },   

    dishCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DishCategory',
        required: true,
    },

    dishDescription: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        required: true,
    },
    
    dishPrice: {
        type: Number,
        required: true,
    }, 
    
}, {
    timestamps: true,
})

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;