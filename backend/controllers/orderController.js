const Order = require('../models/orderModel'); 
const OrderDetail = require('../models/orderDetailModel');

const createOrder = async (req, res) => {
  try {
    const { orderDetails } = req.body;

    if (!orderDetails || orderDetails.length === 0) {
      return res.status(400).json({ message: 'Debe agregar al menos un detalle de orden' });
    }

    const newOrder = new Order({
      orderDetails,
      totalAmount: 0,
    });

    await newOrder.calculateTotal();

    await newOrder.save();
    res.status(201).json({ message: 'Orden creada exitosamente', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la orden', error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('orderDetails') 
      .populate('orderDetails.dish')
      .populate('orderDetails.drink') 
      .populate('orderDetails.client'); 

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pedidos', error: error.message });
  }
};

// Obtener un pedido por ID
const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id)
      .populate('orderDetails')
      .populate('orderDetails.dish') 
      .populate('orderDetails.drink')
      .populate('orderDetails.client'); 

    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el pedido', error: error.message });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['Pending', 'Preparing', 'Completed', 'Cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Estado inválido' });
    }

    const order = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true } 
    );

    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    res.status(200).json({ message: 'Estado de la orden actualizado', order });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el estado de la orden', error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);

    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    res.status(200).json({ message: 'Orden eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la orden', error: error.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
};
