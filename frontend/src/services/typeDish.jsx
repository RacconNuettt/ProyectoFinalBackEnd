import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;


const createTypeDish = async (typeDishData) => {
    try {
        const response = await axios.post(`${URL}/typeDish`, typeDishData); // Añadir 'await'
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al crear tipo de platillo" };
    }
};


const getTypeDish = async(id) => {
    try {
        const response = await axios.get(`${URL}/typeDish/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al obtener tipo "};
    };
};

const getAllTypeDish = async () => {
    try {
        const response = await axios.get(`${URL}/typeDish`); // Añadir 'await'
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener tipos de platillos" };
    }
};


const putTypeDish = async (id) => {
    try {
        const response = await axios.put(`${URL}/typeDish/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al actualizar el tipo de "}
    };
};

const deleteTypeDish = async (id) => {
    try {
        const response = await axios.delete(`${URL}/typeDish/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al eliminar tipo de platillo "};
    };
};

export { createTypeDish, getTypeDish, getAllTypeDish, putTypeDish, deleteTypeDish }