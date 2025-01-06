import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;

const postOrderDetail = async (orderDetailData) => {
    try {
        const response = await axios.post(`${URL}/orderDetail`, orderDetailData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al crear el detalle de la orden" };
    }
};

const getOrderDetail = async () => {
    try {
        const response = await axios.get(`${URL}/orderDetail`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener los detalles de las órdenes" };
    }
};

const getOrderDetailById = async (id) => {
    try {
        const response = await axios.get(`${URL}/orderDetail/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener el detalle de la orden" };
    }
};

const updateOrderDetail = async (id, orderDetailData) => {
    try {
        const response = await axios.put(`${URL}/orderDetail/${id}`, orderDetailData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al actualizar el detalle de la orden" };
    }
};

const deleteOrderDetail = async (id) => {
    try {
        const response = await axios.delete(`${URL}/orderDetail/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar el detalle de la orden" };
    }
};

export { postOrderDetail, getOrderDetailById, getOrderDetail, updateOrderDetail, deleteOrderDetail };
