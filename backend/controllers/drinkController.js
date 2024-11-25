const Drink = require('../models/drinkModel');
const DrinkCategory = require('../models/drinkCategoryModel');

const createDrink = async (req, res) => {
    try {
        const { drinkCategory, drinkName, drinkPrice } = req.body;

        const categoryExists = await DrinkCategory.findById(drinkCategory);
        if (!categoryExists) {
            return res.status(400).json({ message: "La categoría no existe" });
        }

        const newDrink = new Drink({ drinkCategory, drinkName, drinkPrice });
        await newDrink.save();

        res.status(201).json({ message: "Bebida agregada exitosamente", drink: newDrink });
    } catch (error) {
        res.status(500).json({ message: "Error al agregar bebida", error: error.message });
    }
};

const getAllDrink = async (req, res) => {
    try {
        const drinks = await Drink.find().populate('drinkCategory', 'drinkCategoryname');
        res.json(drinks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener bebidas", error: error.message });
    }
};

const getDrinkById = async (req, res) => {
    try {
        const { id } = req.params;
        const drink = await Drink.findById(id).populate('drinkCategory', 'drinkCategoryname');

        if (!drink) {
            return res.status(404).json({ message: "Bebida no encontrada" });
        }

        res.json(drink);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener bebida", error: error.message });
    }
};

const updateDrink = async (req, res) => {
    try {
        const { id } = req.params;
        const { drinkCategory, drinkName, drinkPrice } = req.body;

        const drink = await Drink.findById(id);
        if (!drink) {
            return res.status(404).json({ message: "Bebida no encontrada" });
        }

        if (drinkCategory) {
            const categoryExists = await DrinkCategory.findById(drinkCategory);
            if (!categoryExists) {
                return res.status(400).json({ message: "La categoría no existe" });
            }
            drink.drinkCategory = drinkCategory;
        }

        if (drinkName) drink.drinkName = drinkName;
        if (drinkPrice !== undefined) drink.drinkPrice = drinkPrice;

        await drink.save();
        res.json({ message: "Bebida actualizada exitosamente", drink });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar bebida", error: error.message });
    }
};

const deleteDrink = async (req, res) => {
    try {
        const { id } = req.params;

        const drink = await Drink.findByIdAndDelete(id);
        if (!drink) {
            return res.status(404).json({ message: "Bebida no encontrada" });
        }

        res.json({ message: "Bebida eliminada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar bebida", error: error.message });
    }
};

module.exports = {
    createDrink,
    getAllDrink,
    getDrinkById,
    updateDrink,
    deleteDrink,
};
