const DrinkCategory = require('../models/drinkCategoryModel');

const createDrinkCategory = async (req, res) => {
    try {
        const { drinkCategoryname } = req.body;

        const existingCategory = await DrinkCategory.findOne({drinkCategoryname});
        if(existingCategory){
            return res.status(400).json({message: "La categoria ya existe"});
        }

        const newCategory = new DrinkCategory({ drinkCategoryname });
        await newCategory.save();

        res.status(201).json({ message: "Categoria creada ", category: newCategory});
    
    } catch (error) {
        res.status(500).json({ message: "Error al crear la categoria", error: error.message});
    }
};

const getAllDrinksCategory = async (req, res) => {
    try {
        const categories = await DrinkCategory.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las categorias", error: error.message })
    }
}

const getDrinkCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await DrinkCategory.findById(id);

        if (!category) {
            return res.status(404).json({ message: "categoria no encontrada"});
        }

        res.json(category);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la categoria", error: error.message });
    }
};

const updateDrinkCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { drinkCategoryname } = req.body;

        const category = await DrinkCategory.findById(id);
        if (!category) {
            return res.status(404).json({ message: "Categoria no encontrada"});
        }

        if (drinkCategoryname) category.DrinkCategory = drinkCategoryname;

        await category.save();
        res.json({ message: "Categoria actualizada correctamente", category });

    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la categoria", error: error.message });
    }
};

const deleteDrinkCategory = async (res, req) => {
    try {
        const { id } = req.params;

        const category = await DrinkCategory.findByIdAndDelete;
        if (!category) {
            return res.status(400).json({ message: "Categoria no encontrada" });
        }

        res.json({ message: "Categoria eliminada" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la categoria", error: error.message})
    }
}

module.exports = {
    createDrinkCategory,
    getAllDrinksCategory,
    getDrinkCategoryById,
    updateDrinkCategory,
    deleteDrinkCategory,
};