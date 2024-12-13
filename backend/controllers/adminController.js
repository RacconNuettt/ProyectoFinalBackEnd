const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { get } = require('mongoose');

const registerAdmin = async (req, res) => {
    try {
        const { adminName, adminEmail, adminPassword } = req.body;

        const existingAdmin = await Admin.findOne({ adminEmail });
        if (existingAdmin) {
            return res.status(400).json({ message: "El administrador ya está registrado" });
        }

        const hashedPassword = await bcrypt.hash(adminPassword, 10);

        const newAdmin = new Admin({
            adminName,
            adminEmail,
            adminPassword: hashedPassword,
        });
        
        await newAdmin.save();
        res.status(201).json({ message: "Administrador registrado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el administrador", error: error.message });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { adminEmail, adminPassword } = req.body;

        const admin = await Admin.findOne({ adminEmail });
        if (!admin) {
            return res.status(404).json({ message: "Administrador no encontrado" });
        }

        const isPasswordValid = await bcrypt.compare(adminPassword, admin.adminPassword);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Credenciales inválidas" });
        }

        const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.JWT_SECRET_ADMINS, {
            expiresIn: "2h",
        });

        res.json({ message: "Inicio de sesión exitoso", token });
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error: error.message });
    }
};

const getAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findById(id);

        if (!admin) {
            return res.status(404).json({ message: "Administrador no existe "})
        }

        res.json(admin);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener al administrador", error: error.message });
    }
};

const updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { adminName, adminEmail, adminPassword } = req.body;
        const admin = await Admin.findById(id);

        if (!admin) {
            return res.status(404).json({ message: "Administrador no existe"});
        }

        if (adminName) admin.adminName = adminName;
        if (adminEmail) admin.adminEmail = adminEmail;

        if (adminPassword) {
            const hashedPassword = await bcrypt.hash(adminPassword, 10);
            admin.adminPassword = hashedPassword;
        }

        await admin.save();
        res.json({ message: "Administrador actualizado", admin });

    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el cliente", error: error.message });
    }
};

const deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        const admin = await Admin.findByIdAndDelete(id);

        if (!admin) {
            return res.status(404).json({ message: "No se encontro administrador"});
        }

        res.json({ message: "Administrador eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar al administrador", error: error.message })
    }
}


module.exports = {
    registerAdmin,
    loginAdmin,
    getAdmin,
    updateAdmin,
    deleteAdmin
};
