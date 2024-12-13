const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const clientRoute = require('./routes/clientRoute');
const adminRoute = require('./routes/adminRoute');
const drinkCategoryRoute = require('./routes/drinkCategoryRoute')
const drinkRoute = require('./routes/drinkRoute');
const dishCategoryRoute = require('./routes/dishCategoryRoute');
const dishRoute = require('./routes/dishRoute');
const providerRoute = require('./routes/providerRoute');
const stockRoute = require('./routes/stockRoute');
const menuRoute = require('./routes/menuRoute');
const orderDetailRoute = require('./routes/orderDetailRoute');
const orderRoute = require('./routes/orderRoute')
const saleDetailRoute = require('./routes/saleDetailRoute')
const saleRoute = require('./routes/saleRoute');
const typeDish = require('./routes/typeDishRoute')
const connectDB = require('./config/db');
const path = require('path')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); 

app.use('/client', clientRoute);
app.use('/admin', adminRoute);
app.use('/drinkC', drinkCategoryRoute);
app.use('/drink', drinkRoute);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/dishC', dishCategoryRoute);
app.use('/provider', providerRoute);
app.use('/dish', dishRoute);
app.use('/stock', stockRoute);
app.use('/menu', menuRoute);
app.use('/orderDetail', orderDetailRoute);
app.use('/order', orderRoute);
app.use('/saleDetail', saleDetailRoute);
app.use('/sale', saleRoute);
app.use('/typeDish', typeDish);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
