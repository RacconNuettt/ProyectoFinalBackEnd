const SaleDetail = require('../models/saleDetailModel');
const Order = require('../models/orderModel');

const createSaleDetail = async (req, res) => {
  try {
    const { order, billNumber } = req.body;

    const existingOrder = await Order.findById(order);
    if (!existingOrder) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }

    const saleDetail = new SaleDetail({ order, billNumber });
    await saleDetail.save();

    res.status(201).json({ message: "Detalle de venta creado exitosamente", saleDetail });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el detalle de venta", error: error.message });
  }
};

const getAllSaleDetails = async (req, res) => {
  try {
    const saleDetails = await SaleDetail.find().populate('order');
    res.json(saleDetails);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los detalles de venta", error: error.message });
  }
};

const getSaleDetailById = async (req, res) => {
  try {
    const { id } = req.params;

    const saleDetail = await SaleDetail.findById(id).populate('order');
    if (!saleDetail) {
      return res.status(404).json({ message: "Detalle de venta no encontrado" });
    }

    res.json(saleDetail);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el detalle de venta", error: error.message });
  }
};

const updateSaleDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const { billNumber } = req.body;

    const saleDetail = await SaleDetail.findById(id);
    if (!saleDetail) {
      return res.status(404).json({ message: "Detalle de venta no encontrado" });
    }

    if (billNumber !== undefined) saleDetail.billNumber = billNumber;

    await saleDetail.save();
    res.json({ message: "Detalle de venta actualizado exitosamente", saleDetail });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el detalle de venta", error: error.message });
  }
};

const deleteSaleDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const saleDetail = await SaleDetail.findByIdAndDelete(id);
    if (!saleDetail) {
      return res.status(404).json({ message: "Detalle de venta no encontrado" });
    }

    res.json({ message: "Detalle de venta eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el detalle de venta", error: error.message });
  }
};

module.exports = {
  createSaleDetail,
  getAllSaleDetails,
  getSaleDetailById,
  updateSaleDetail,
  deleteSaleDetail,
};
