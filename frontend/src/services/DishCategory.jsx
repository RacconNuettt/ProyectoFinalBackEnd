import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;

const postDishCategory = async (dishCategoryData) => {
    try {
        const response = await axios.post(`${URL}/dishC`, dishCategoryData);
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: " Error al crear categoria "};
    }
};


const getDishCategory = async (dishCategoryData) => {
    try{
        const response = await axios.get(`${URL}/dishC`);
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: " Error al obtener categoria "}
    }
};

const deleteDishCategory = async (id) => {
    try {
        const response = await axios.delete(`${URL}/dishC/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar categoria" }
    }
};

export {postDishCategory, getDishCategory, deleteDishCategory};