const Client = require('../models/clientModel');
const bcrypt = require('bcrypt');

const createClient = async (req, res) => {
    try {
        const { clientname, clientemail, clientpassword } = req.body;

        const existingClient = await Client.findOne({ clientemail });
        if (existingClient) {
            return res.status(400).json({ message: "El cliente ya existe" });
        }

        const hashedPassword = await bcrypt.hash(clientpassword, 10);

        const newClient = new Client({
            clientname,
            clientemail,
            clientpassword: hashedPassword,
        });

        await newClient.save();
        res.status(201).json({ message: "Cliente registrado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el cliente", error: error.message });
    }
};

const postClient = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findById(id);

        if (!client) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        res.json(client);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el cliente", error: error.message });
    }
};

const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const { clientname, clientemail, clientpassword } = req.body;

        const client = await Client.findById(id);
        if (!client) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        if (clientname) client.clientname = clientname;
        if (clientemail) client.clientemail = clientemail;

        if (clientpassword) {
            const hashedPassword = await bcrypt.hash(clientpassword, 10);
            client.clientpassword = hashedPassword;
        }

        await client.save();
        res.json({ message: "Cliente actualizado", client });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el cliente", error: error.message });
    }
};

const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;

        const client = await Client.findByIdAndDelete(id);

        if (!client) {
            return res.status(404).json({ message: "no se encontro al cliente" });
        }

        res.json({ message: "Cliente eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el cliente", error: error.message });
    }
};

module.exports = {
    createClient,
    getClient,
    updateClient,
    deleteClient,
};
