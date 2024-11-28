const Sale = require('../models/saleModel');
const SaleDetail = require('../models/saleDetailModel');

const createSale = async (req, res) => {
    try {
        const { saleDetail, paymentMethod } = req.body;

        const details = await SaleDetail.find({ _id: { $in: saleDetail } });
        if (!details || details.length !== saleDetail.length) {
            return res.status(400).json({ message: "Algunos detalles de venta no son válidos" });
        }

        const newSale = new Sale({
            saleDetail,
            paymentMethod,
        });

        await newSale.save();
        res.status(201).json({ message: "Venta registrada exitosamente", sale: newSale });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la venta", error: error.message });
    }
};

const getAllSales = async (req, res) => {
    try {
        const sales = await Sale.find()
            .populate({
                path: 'saleDetail',
                populate: [
                    {
                        path: 'order'
                    }
                ]
            })
            .sort({ createdAt: -1 });

        res.json(sales);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las ventas", error: error.message });
    }
};

const getSaleById = async (req, res) => {
    try {
        const { id } = req.params;
        const sale = await Sale.findById(id).populate({
            path: 'saleDetail',
            populate: [
                {
                    path: 'order',
                    select: 'orderDetails'
                },
            ],
        });

        if (!sale) {
            return res.status(404).json({ message: "Venta no encontrada" });
        }

        res.json(sale);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la venta", error: error.message });
    }
};

const updateSale = async (req, res) => {
    try {
        const { id } = req.params;
        const { saleDetail, paymentMethod } = req.body;

        const sale = await Sale.findById(id);
        if (!sale) {
            return res.status(404).json({ message: "Venta no encontrada" });
        }

        if (saleDetail) {
            const details = await SaleDetail.find({ _id: { $in: saleDetail } });
            if (!details || details.length !== saleDetail.length) {
                return res.status(400).json({ message: "Algunos detalles de venta no son válidos" });
            }
            sale.saleDetail = saleDetail;
            sale.totalAmount = details.reduce((total, detail) => total + detail.quantity * detail.price, 0);
        }

        if (paymentMethod) {
            sale.paymentMethod = paymentMethod;
        }

        await sale.save();
        res.json({ message: "Venta actualizada exitosamente", sale });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la venta", error: error.message });
    }
};

const deleteSale = async (req, res) => {
    try {
        const { id } = req.params;

        const sale = await Sale.findByIdAndDelete(id);
        if (!sale) {
            return res.status(404).json({ message: "Venta no encontrada" });
        }

        res.json({ message: "Venta eliminada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la venta", error: error.message });
    }
};

module.exports = {
    createSale,
    getAllSales,
    getSaleById,
    updateSale,
    deleteSale,
};
