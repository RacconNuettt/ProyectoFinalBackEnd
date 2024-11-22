const Drink = require('../models/drinkModel');
const DrinkCategory = require('../models/drinkCategoryModel');


const createDrink = async (req, res) => {
    try {
        const { drinkCategory, drinkName, drinkPrice} = req.body;

        const categoryExists = await DrinkCategory.findById(drinkCategory);
        if (!categoryExists) {
            
        }
    } catch (error) {
        
    }
}


const getAllDrink = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const getDrinkById = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const updateDrink = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const deleteDrink = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}