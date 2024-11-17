const mongoose = require('mongoose'); 

const drinkSchema = new mongoose.Schema({
    DrinkCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DrinkCategory',
        required: true,
    },
    Drinkname: {
        type: String,
        required: true,
    },   
    
    Drinkprice: {
        type: Number,
        required: true,
    },   
}, {
    timestamps: true,
})

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;