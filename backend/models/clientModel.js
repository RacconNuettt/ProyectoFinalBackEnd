const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    clientname: {
        type: String,
        required: true,
        unique: true
    },
    clientemail: {
        type: String,
        required: true,
        unique: true
    },
    clientpassword: {
        type: String,
        required: true
    },
  
}, {
    timestamps: true
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;