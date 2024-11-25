const Provider = require('../models/providerModel');

const createProvider = async (req, res) => {
    try {
        const { providerName } = req.body;

        const existingProvider = await Provider.findOne({ providerName });
        if (existingProvider) {
            return res.status(400).json({ message: "El proveedor ya existe" });
        }

        const newProvider = new Provider({ providerName });
        await newProvider.save();

        res.status(201).json({ message: "Proveedor creado exitosamente", provider: newProvider });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el proveedor", error: error.message });
    }
};

const getAllProviders = async (req, res) => {
    try {
        const providers = await Provider.find();
        res.json(providers);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los proveedores", error: error.message });
    }
};

const getProviderById = async (req, res) => {
    try {
        const { id } = req.params;

        const provider = await Provider.findById(id);
        if (!provider) {
            return res.status(404).json({ message: "Proveedor no encontrado" });
        }

        res.json(provider);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el proveedor", error: error.message });
    }
};

const updateProvider = async (req, res) => {
    try {
        const { id } = req.params;
        const { providerName } = req.body;

        const provider = await Provider.findById(id);
        if (!provider) {
            return res.status(404).json({ message: "Proveedor no encontrado" });
        }

        if (providerName) {
            const existingProvider = await Provider.findOne({ providerName });
            if (existingProvider && existingProvider._id.toString() !== id) {
                return res.status(400).json({ message: "El nombre del proveedor ya está en uso" });
            }
            provider.providerName = providerName;
        }

        await provider.save();
        res.json({ message: "Proveedor actualizado exitosamente", provider });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el proveedor", error: error.message });
    }
};

const deleteProvider = async (req, res) => {
    try {
        const { id } = req.params;

        const provider = await Provider.findByIdAndDelete(id);
        if (!provider) {
            return res.status(404).json({ message: "Proveedor no encontrado" });
        }

        res.json({ message: "Proveedor eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el proveedor", error: error.message });
    }
};

module.exports = {
    createProvider,
    getAllProviders,
    getProviderById,
    updateProvider,
    deleteProvider,
};
