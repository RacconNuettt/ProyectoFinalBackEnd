const Client = require('../models/clientModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerClient = async (req, res) => {
    try {
        const { clientname, clientemail, clientpassword } = req.body;

        // Validación de campos requeridos
        if (!clientname || !clientemail || !clientpassword) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        // Verificar si el cliente ya existe
        const existingClient = await Client.findOne({ clientemail });
        if (existingClient) {
            return res.status(400).json({ message: "El cliente ya existe" });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(clientpassword, 10);

        // Crear un nuevo cliente
        const newClient = new Client({
            clientname,
            clientemail,
            clientpassword: hashedPassword,
        });

        await newClient.save();

        // Enviar respuesta sin el token
        res.status(201).json({
            message: "Cliente registrado exitosamente",
            client: {
                id: newClient._id,
                clientname: newClient.clientname,
                clientemail: newClient.clientemail,
            }
        });
    } catch (error) {
        console.error("Error al registrar el cliente:", error);
        res.status(500).json({ message: "Error al registrar el cliente", error: error.message });
    }
};


const loginClient = async (req, res) => {
    try {
        const { clientemail, clientpassword } = req.body;
        const client = await Client.findOne({ clientemail });

        if (!client) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        const isPasswordValid = await bcrypt.compare(clientpassword, client.clientpassword);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Credenciales inválidas" });
        }

        //aqui estoy agregando la informacion que quiero que el token me suministre
        const token = jwt.sign(
            { id: client._id, role: 'client', name: client.clientname }, 
            process.env.JWT_SECRET_CLIENTS, 
            { expiresIn: "1h" }
        );

        res.json({ 
            message: "Inicio de sesión exitoso", 
            token, 
            clientName: client.clientname 
        });
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
    }
};

const getClient = async (req, res) => {
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
            return res.status(404).json({ message: "No se encontró al cliente" });
        }

        res.json({ message: "Cliente eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el cliente", error: error.message });
    }
};

module.exports = {
    registerClient,
    loginClient,
    getClient,
    updateClient,
    deleteClient,
};
