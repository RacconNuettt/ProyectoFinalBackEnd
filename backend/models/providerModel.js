const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
    providerName: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    timestamps: true
});

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;