const DishCategory = require('../models/dishCategoryModel');

const createDishCategory = async (req, res) => {
    try {
        const { dishCategoryname } = req.body;

        const existingCategory = await DishCategory.findOne({ dishCategoryname });
        if (existingCategory) {
            return res.status(400).json({ message: "La categoría ya existe" });
        }

        const newCategory = new DishCategory({ dishCategoryname });
        await newCategory.save();

        res.status(201).json({ message: "Categoría creada exitosamente", category: newCategory });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la categoría", error: error.message });
    }
};

const getAllDishCategories = async (req, res) => {
    try {
        const categories = await DishCategory.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las categorías", error: error.message });
    }
};

const getDishCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await DishCategory.findById(id);

        if (!category) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        res.json(category);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la categoría", error: error.message });
    }
};

const updateDishCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { dishCategoryname } = req.body;

        const category = await DishCategory.findById(id);
        if (!category) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        if (dishCategoryname) category.dishCategoryname = dishCategoryname;

        await category.save();
        res.json({ message: "Categoría actualizada exitosamente", category });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la categoría", error: error.message });
    }
};

const deleteDishCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await DishCategory.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        res.json({ message: "Categoría eliminada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la categoría", error: error.message });
    }
};

module.exports = {
    createDishCategory,
    getAllDishCategories,
    getDishCategoryById,
    updateDishCategory,
    deleteDishCategory,
};
