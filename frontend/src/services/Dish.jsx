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

const getDish = async(dishData) => {
    try {
        const response = await axios.get(`${URL}/dish`);
        response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener platillos"};
    };
};