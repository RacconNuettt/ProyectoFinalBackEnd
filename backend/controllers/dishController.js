const Dish = require('../models/dishModel');
const DishCategory = require('../models/dishCategoryModel');

const createDish = async (req, res) => {
    try {
        const { dishCategory, dishName, dishPrice } = req.body;

        const categoryExists = await DishCategory.findById(dishCategory);
        if (!categoryExists) {
            return res.status(400).json({ message: "La categoría no existe" });
        }

        const newDish = new Dish({ dishCategory, dishName, dishPrice });
        await newDish.save();

        res.status(201).json({ message: "Platillo creado exitosamente", dish: newDish });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el platillo", error: error.message });
    }
};

const getAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find().populate('dishCategory', 'dishCategoryname');
        res.json(dishes);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los platillos", error: error.message });
    }
};

const getDishById = async (req, res) => {
    try {
        const { id } = req.params;
        const dish = await Dish.findById(id).populate('dishCategory', 'dishCategoryname');

        if (!dish) {
            return res.status(404).json({ message: "Platillo no encontrado" });
        }

        res.json(dish);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el platillo", error: error.message });
    }
};

const updateDish = async (req, res) => {
    try {
        const { id } = req.params;
        const { dishCategory, dishName, dishPrice } = req.body;

        const dish = await Dish.findById(id);
        if (!dish) {
            return res.status(404).json({ message: "No se ha encontrado el platillo" });
        }

        if (dishCategory) {
            const categoryExists = await DishCategory.findById(dishCategory);
            if (!categoryExists) {
                return res.status(400).json({ message: "La categoria no existe" });
            }
            dish.dishCategory = dishCategory;
        }

        if (dishName) dish.dishName = dishName;
        if (dishPrice !== undefined) dish.dishPrice = dishPrice;

        await dish.save();
        res.json({ message: "Platillo actualizado", dish });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el platillo", error: error.message });
    }
};

const deleteDish = async (req, res) => {
    try {
        const { id } = req.params;

        const dish = await Dish.findByIdAndDelete(id);
        if (!dish) {
            return res.status(404).json({ message: "Platillo no encontrado" });
        }

        res.json({ message: "Platillo eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el platillo", error: error.message });
    }
};

module.exports = {
    createDish,
    getAllDishes,
    getDishById,
    updateDish,
    deleteDish,
};
