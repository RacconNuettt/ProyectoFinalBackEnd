import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;

const postDish = async (dishData) => {
    try {
        const response = await axios.post(`${URL}/dish`);
        return response.data
    } catch (error) {
        throw error.response?.data || { message: "Error al crear el platillo"}
    };
};

const getDish = async (dishData) => {
    try {
        const response = await axios.get(`${URL}/dish`);
        response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener platillos"};
    };
};

const getDishById = async (id) => {
    try {
        const response = await axios.get(`${URL}/dish/${id}`);
        response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al obtener platillo " }
    };
};

const updateDish = async (id) => {
    try {
        const response = await axios.put(`${URL}/dish/${id}`);
        response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al actualizar el platillo "};
    };
};

const deleteDish = async (id) => {
    try {
        const response = await axios.delete(`${URL}/dish/${id}`);
        response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al eliminar el platillo "};
    };
};

export { postDish, getDishById, getDish, updateDish, deleteDish };