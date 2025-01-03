const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminName: {
        type: String,
        required: true,
        unique: true
    },
    adminEmail: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            }, message: props => `${props.value} no es un correo válido.`
        }
    },
    adminPassword: {
        type: String,
        required: true
    },
  
}, {
    timestamps: true
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

