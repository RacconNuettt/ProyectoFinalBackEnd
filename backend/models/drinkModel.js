const mongoose = require('mongoose'); 

const drinkSchema = new mongoose.Schema({
    drinkCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DrinkCategory',
        required: true,
    },
    drinkName: {
        type: String,
        required: true,
    },   
    
    drinkPrice: {
        type: Number,
        required: true,
    },   
}, {
    timestamps: true,
})

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;