const OrderDetail = require('../models/orderDetailModel');

const createOrderDetail = async (req, res) => {
    try {
        const { drink, dish, client, quantity, specialInstructions } = req.body;

        const newOrderDetail = new OrderDetail({
            drink,
            dish,
            client,
            quantity,
            specialInstructions,
        });

        await newOrderDetail.save();
        res.status(201).json({ message: 'Detalle de orden creado exitosamente', orderDetail: newOrderDetail });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el detalle de la orden', error: error.message });
    }
};

const getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.find()
            .populate('drink', 'name drinkPrice') 
            .populate('dish', 'dishName dishPrice')  
            .populate('client', 'clientname clientemail'); 

        res.json(orderDetails);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los detalles de la orden', error: error.message });
    }
};

const getOrderDetailById = async (req, res) => {
    try {
        const { id } = req.params;

        const orderDetail = await OrderDetail.findById(id)
            .populate('drink', 'drinkName drinkPrice')
            .populate('dish', 'dishName dishPrice')
            .populate('client', 'clientname clientemail');

        if (!orderDetail) {
            return res.status(404).json({ message: 'Detalle de orden no encontrado' });
        }

        res.json(orderDetail);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el detalle de la orden', error: error.message });
    }
};

const updateOrderDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const { drink, dish, client, quantity, specialInstructions } = req.body;

        const orderDetail = await OrderDetail.findById(id);
        if (!orderDetail) {
            return res.status(404).json({ message: 'Detalle de orden no encontrado' });
        }

        if (drink) orderDetail.drink = drink;
        if (dish) orderDetail.dish = dish;
        if (client) orderDetail.client = client;
        if (quantity) orderDetail.quantity = quantity;
        if (specialInstructions) orderDetail.specialInstructions = specialInstructions;

        await orderDetail.save();
        res.json({ message: 'Detalle de orden actualizado', orderDetail });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el detalle de la orden', error: error.message });
    }
};

const deleteOrderDetail = async (req, res) => {
    try {
        const { id } = req.params;

        const orderDetail = await OrderDetail.findByIdAndDelete(id);
        if (!orderDetail) {
            return res.status(404).json({ message: 'Detalle de orden no encontrado' });
        }

        res.json({ message: 'Detalle de orden eliminado', orderDetail });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el detalle de la orden', error: error.message });
    }
};

module.exports = {
    createOrderDetail,
    getAllOrderDetails,
    getOrderDetailById,
    updateOrderDetail,
    deleteOrderDetail,
};
