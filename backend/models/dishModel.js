const mongoose = require('mongoose'); 

const dishSchema = new mongoose.Schema({

    dishName: {
        type: String,
        required: true,
    },   

    dishDescription: {
        type: String,
        require: true,
    },

    dishCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DishCategory',
        required: true,
    },

    dishPrice: {
        type: Number,
        required: true,
    }, 
    
    image: {
        type: String,
    },

    
}, {
    timestamps: true,
})

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;