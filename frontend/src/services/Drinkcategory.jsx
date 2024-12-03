import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;

const postDrinkCategory = async (drinkCategoryData) => {
    try {
        const response = await axios.post(`${URL}/drinkC`, drinkCategoryData);
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: " Error al crear categoria "};
    }
};


const getDrinkCategory = async (drinkCategoryData) => {
    try{
        const response = await axios.get(`${URL}/drinkC`);
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: " Error al obtener categoria "}
    }
};

const deleteDrinkCategory = async (id) => {
    try {
        const response = await axios.delete(`${URL}/drinkC/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar categoria" }
    }
};


export {postDrinkCategory, getDrinkCategory, deleteDrinkCategory};