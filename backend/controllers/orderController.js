const Order = require('../models/orderModel');
const OrderDetail = require('../models/orderDetailModel');


const createOrder = async (req, res) => {
  try {
    const { orderDetails, status } = req.body;

    if (!orderDetails || orderDetails.length === 0) {
      return res.status(400).json({ message: 'Debe agregar al menos un detalle de la orden' });
    }

    const details = await OrderDetail.find({ '_id': { $in: orderDetails } })
      .populate('dish')
      .populate('drink')
      .populate('client');

    if (details.length !== orderDetails.length) {
      return res.status(400).json({ message: 'Uno o más detalles de la orden no son válidos o no existen.' });
    }

    const newOrder = new Order({
      orderDetails,
      status: status || 'Pending',
      totalAmount: 0,
    });

    let total = 0;
    details.forEach(detail => {
      const dishPrice = detail.dish ? detail.dish.dishPrice : 0;
      const drinkPrice = detail.drink ? detail.drink.drinkPrice : 0;

      total += detail.quantity * dishPrice + detail.quantity * drinkPrice;
    });

    if (isNaN(total)) {
      return res.status(400).json({ message: 'Error en el cálculo del total, valores no válidos' });
    }

    newOrder.totalAmount = total;

    await newOrder.save();

    res.status(201).json({ message: 'Orden creada exitosamente', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la orden', error: error.message });
  }
};

const getAllOrders = async (req, res) => {

  try {
    const orders = await Order.find()
      .populate({
        path: 'orderDetails',
        populate: [
          {
            path: 'dish',
            select: 'dishName dishPrice',
            populate: { path: 'dishCategory', select: 'dishCategoryname' }
          },
          {
            path: 'drink',
            select: 'drinkName drinkPrice',
            populate: { path: 'drinkCategory', select: 'drinkCategoryname' }
          },
          { path: 'client', select: 'clientname clientemail' },
        ],
      });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pedidos', error: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id)
      .populate({
        path: 'orderDetails',
        populate: [
          {
            path: 'dish',
            select: 'dishName dishPrice',
            populate: { path: 'dishCategory', select: 'dishCategoryname' }
          },
          {
            path: 'drink',
            select: 'drinkName drinkPrice',
            populate: { path: 'drinkCategory', select: 'drinkCategoryname' }
          },
          { path: 'client', select: 'clientname clientemail' },
        ],
      });

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
