const Stock = require('../models/stockModel');
const Dish = require('../models/dishModel');
const Drink = require('../models/drinkModel');
const Provider = require('../models/providerModel');

const createStock = async (req, res) => {
    try {
        const { dish, quantity, drink, drinkQuantity, provider } = req.body;

        const providerExists = await Provider.findById(provider);
        if (!providerExists) {
            return res.status(404).json({ message: "El proveedor no existe." });
        }

        let dishExists = null;
        if (dish) {
            dishExists = await Dish.findById(dish);
            if (!dishExists) {
                return res.status(404).json({ message: "El plato no existe." });
            }
        }

        let drinkExists = null;
        if (drink) {
            drinkExists = await Drink.findById(drink);
            if (!drinkExists) {
                return res.status(404).json({ message: "La bebida no existe." });
            }
        }

        const newStock = new Stock({
            dish: dishExists ? dish : null,
            quantity,
            drink: drinkExists ? drink : null,
            drinkQuantity,
            provider,
        });

        await newStock.save();
        res.status(201).json({ message: "Stock creado exitosamente", stock: newStock });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el stock", error: error.message });
    }
};

const getStock = async (req, res) => {
    try {
        const stock = await Stock.find()
            .populate('dish', 'dishName dishPrice')
            .populate('drink', 'drinkName drinkPrice')
            .populate('provider', 'providerName');

        if (!stock.length) {
            return res.status(404).json({ message: "No se encontró ningún stock." });
        }

        res.status(200).json(stock);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el stock", error: error.message });
    }
};

const updateStock = async (req, res) => {
    try {
        const { id } = req.params;
        const { itemType, itemId, newQuantity } = req.body;

        if (!['dish', 'drink'].includes(itemType)) {
            return res.status(400).json({ message: "Tipo de artículo inválido, usa 'dish' o 'drink'." });
        }

        const stock = await Stock.findById(id);
        if (!stock) {
            return res.status(404).json({ message: "No se encontró el stock." });
        }

        if (itemType === 'dish') {
            if (stock.dish?.toString() !== itemId) {
                return res.status(404).json({ message: "Plato no encontrado en el stock." });
            }
            stock.quantity = newQuantity;
        } else if (itemType === 'drink') {
            if (stock.drink?.toString() !== itemId) {
                return res.status(404).json({ message: "Bebida no encontrada en el stock." });
            }
            stock.drinkQuantity = newQuantity;
        }

        await stock.save();
        res.status(200).json({ message: "Cantidad actualizada con éxito", stock });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el stock", error: error.message });
    } 
};


const deleteStock = async (req, res) => {
    try {
        const { itemName, itemId } = req.body;
  
        if (!['dish', 'drink'].includes(itemName)) {
            return res.status(400).json({ message: "Tipo de artículo inválido, usa 'dish' o 'drink'." });
        }

        const stock = await Stock.findOne({ [itemName]: itemId });
        if (!stock) {
            return res.status(404).json({ message: `${itemName === 'dish' ? 'Plato' : 'Bebida'} no encontrado en el stock.` });
        }

        if (itemName === 'dish') {
            stock.dish = null; 
            stock.quantity = 0; 
        } else if (itemName === 'drink') {
            stock.drink = null; 
            stock.drinkQuantity = 0; 
        }
  
        await stock.save();
        res.status(200).json({ message: `${itemName} eliminado del stock con éxito`, stock });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar del stock", error: error.message });
    }
  };
  


module.exports = {
    createStock,
    getStock,
    updateStock,
    deleteStock,
};
