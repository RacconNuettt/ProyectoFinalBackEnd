const Menu = require('../models/menuModel');
const Dish = require('../models/dishModel');
const Drink = require('../models/drinkModel');
const Stock = require('../models/stockModel');

const createMenu = async (req, res) => {
    try {
        const { name, description, price, dishes, drinks, stock } = req.body;

        const foundStock = await Stock.findById(stock);
        if (!foundStock) {
            return res.status(400).json({ message: "Stock no encontrado" });
        }

        const dishItems = await Dish.find({ '_id': { $in: dishes } });
        const drinkItems = await Drink.find({ '_id': { $in: drinks } });

        if (dishItems.length !== dishes.length || drinkItems.length !== drinks.length) {
            return res.status(400).json({ message: "Uno o más platos/bebidas no existen" });
        }

        const newMenu = new Menu({
            name,
            description,
            price,
            dishes,
            drinks,
            stock,
        });

        await newMenu.save();
        res.status(201).json({ message: "Menú creado exitosamente", newMenu });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el menú", error: error.message });
    }
};

const getMenus = async (req, res) => {
    try {
        const menus = await Menu.find()
            .populate('dishes')
            .populate('drinks')
            .populate('stock');

        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los menús", error: error.message });
    }
};

const updateMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, dishes, drinks, stock } = req.body;

        const updatedMenu = await Menu.findByIdAndUpdate(
            id,
            { name, description, price, dishes, drinks, stock },
            { new: true }
        )
        .populate('dishes')
        .populate('drinks')
        .populate('stock');

        if (!updatedMenu) {
            return res.status(404).json({ message: "Menú no encontrado" });
        }

        res.json({ message: "Menú actualizado", updatedMenu });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el menú", error: error.message });
    }
};

const deleteMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMenu = await Menu.findByIdAndDelete(id);

        if (!deletedMenu) {
            return res.status(404).json({ message: "Menú no encontrado" });
        }

        res.json({ message: "Menú eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el menú", error: error.message });
    }
};

module.exports = {
    createMenu,
    getMenus,
    updateMenu,
    deleteMenu
};
