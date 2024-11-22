const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const clientRoute = require('./routes/clientRoute');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); 

app.use('/api', clientRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
