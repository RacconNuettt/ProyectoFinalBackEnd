const TypeDish = require('../models/typeDishModel');

const createTypeDish = async (req, res) => {
    try {
        const { typeName } = req.body;
        const newTypeDish = new TypeDish({ typeName });
        await newTypeDish.save();
        res.status(201).json({ message: 'TypeDish created successfully', data: newTypeDish });
    } catch (error) {
        res.status(500).json({ message: 'Error creating TypeDish', error: error.message });
    }
};


const getAllTypeDishes = async (req, res) => {
    try {
        const typeDishes = await TypeDish.find();
        res.json(typeDishes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching TypeDishes', error: error.message });
    }
};

const getTypeDishById = async (req, res) => {
    try {
        const { id } = req.params;
        const typeDish = await TypeDish.findById(id);
        if (!typeDish) {
            return res.status(404).json({ message: 'TypeDish not found' });
        }
        res.status(200).json({ data: typeDish });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching TypeDish', error: error.message });
    }
};

const updateTypeDish = async (req, res) => {
    try {
        const { id } = req.params;
        const { typeName } = req.body;
        const updatedTypeDish = await TypeDish.findByIdAndUpdate(
            id,
            { typeName },
            { new: true, runValidators: true }
        );
        if (!updatedTypeDish) {
            return res.status(404).json({ message: 'TypeDish not found' });
        }
        res.status(200).json({ message: 'TypeDish updated successfully', data: updatedTypeDish });
    } catch (error) {
        res.status(500).json({ message: 'Error updating TypeDish', error: error.message });
    }
};

const deleteTypeDish = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTypeDish = await TypeDish.findByIdAndDelete(id);
        if (!deletedTypeDish) {
            return res.status(404).json({ message: 'TypeDish not found' });
        }
        res.status(200).json({ message: 'TypeDish deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting TypeDish', error: error.message });
    }
};

module.exports = {
    createTypeDish,
    getAllTypeDishes,
    getTypeDishById,
    updateTypeDish,
    deleteTypeDish
};
