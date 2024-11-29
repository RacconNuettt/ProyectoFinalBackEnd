const Dish = require('../models/dishModel');
const DishCategory = require('../models/dishCategoryModel');

const createDish = async (req, res) => {
    try {
        const { dishName, dishDescription, dishCategory, dishPrice, image} = req.body;

        const categoryExists = await DishCategory.findById(dishCategory);
        if (!categoryExists) {
            return res.status(404).json({ message: "La categoría no existe" });
        }

        const newDish = new Dish({
            dishName,
            dishDescription,
            dishCategory,
            dishPrice,
            image,
        });

        await newDish.save();
        res.status(201).json({ message: "Plato creado exitosamente", dish: newDish });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el plato", error: error.message });
    }
};

const getDishes = async (req, res) => {
    try {
        const dishes = await Dish.find().populate('dishCategory', 'dishCategoryname');
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los platos", error: error.message });
    }
};

const getDishById = async (req, res) => {
    try {
        const { id } = req.params;
        const dish = await Dish.findById(id).populate('dishCategory', 'dishCategoryname');

        if (!dish) {
            return res.status(404).json({ message: "Plato no encontrado" });
        }

        res.status(200).json(dish);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el plato", error: error.message });
    }
};

const updateDish = async (req, res) => {
    try {
        const { id } = req.params;
        const { dishName, dishDescription, dishCategory, dishPrice, image} = req.body;

        const dish = await Dish.findById(id);
        if (!dish) {
            return res.status(404).json({ message: "Plato no encontrado" });
        }

        if (dishCategory) {
            const categoryExists = await DishCategory.findById(dishCategory);
            if (!categoryExists) {
                return res.status(404).json({ message: "La categoría no existe" });
            }
            dish.dishCategory = dishCategory;
        }

        if (dishName) dish.dishName = dishName;
        if (dishDescription) dish.dishDescription = dishDescription;
        if (dishPrice) dish.dishPrice = dishPrice;
        if (image) dish.image = image;
        
        await dish.save();
        res.status(200).json({ message: "Plato actualizado", dish });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el plato", error: error.message });
    }
};

const deleteDish = async (req, res) => {
    try {
        const { id } = req.params;

        const dish = await Dish.findByIdAndDelete(id);
        if (!dish) {
            return res.status(404).json({ message: "Plato no encontrado" });
        }

        res.status(200).json({ message: "Plato eliminado", dish });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el plato", error: error.message });
    }
};

module.exports = {
    createDish,
    getDishes,
    getDishById,
    updateDish,
    deleteDish,
};
