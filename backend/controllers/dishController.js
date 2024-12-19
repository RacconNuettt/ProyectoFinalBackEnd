const Dish = require('../models/dishModel');
const DishCategory = require('../models/dishCategoryModel');
const TypeDish = require('../models/typeDishModel');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const createDish = async (req, res) => {
  try {
    console.log("Datos recibidos en el backend:", req.body);
    console.log("Archivo recibido:", req.file);

    const { dishName, dishDescription, dishCategory, dishPrice, typeDish } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const categoryExists = await DishCategory.findById(dishCategory);
    if (!categoryExists) {
      console.log("La categoría no existe");
      return res.status(404).json({ message: "La categoría no existe" });
    }

    const typeDishExists = await TypeDish.findById(typeDish);
    if (!typeDishExists) {
      console.log("El tipo de plato no existe");
      return res.status(404).json({ message: "El tipo de plato no existe" });
    }

    const newDish = new Dish({
      dishName,
      dishDescription,
      dishPrice,
      dishCategory,
      typeDish,
      imageUrl,
    });

    await newDish.save();
    console.log("Platillo creado exitosamente:", newDish);
    res.status(201).json({ message: "Platillo creado exitosamente", dish: newDish });
  } catch (error) {
    console.error("Error al crear el platillo:", error.message);
    res.status(500).json({ message: "Error al crear el platillo", error: error.message });
  }
};

const getDishes = async (req, res) => {
  try {
    const dishes = await Dish.find()
      .populate('dishCategory', 'dishCategoryname')
      .populate('typeDish', 'typeName');
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los platos", error: error.message });
  }
};

const getDishById = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findById(id)
      .populate('dishCategory', 'dishCategoryname')
      .populate('typeDish', 'typeName');

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
    const { dishName, dishDescription, dishCategory, dishPrice, typeDish, image } = req.body;

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

    if (typeDish) {
      const typeDishExists = await TypeDish.findById(typeDish);
      if (!typeDishExists) {
        return res.status(404).json({ message: "El tipo de plato no existe" });
      }
      dish.typeDish = typeDish;
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
  upload,
};
