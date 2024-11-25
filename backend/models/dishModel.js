const mongoose = require('mongoose'); 

const dishSchema = new mongoose.Schema({
    dishCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DishCategory',
        required: true,
    },
    
    image: {
        type: String,
        required: true,
    },

    dishName: {
        type: String,
        required: true,
    },   

    dishDescription: {
        type: String,
        require: true,
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