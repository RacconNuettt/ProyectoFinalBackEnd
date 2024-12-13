import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;

const postDrink = async (drinkData) => {
    try {
        const response = await axios.post(`${URL}/drink`, drinkData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al crear bebida "};
    };
};

const getDrink = async () => {
    try {
        const response = await axios.get(`${URL}/drink`)
        return response.data
    } catch (error) {
        throw error.response?.data || { message: " Error al obtener bebidas "};
    };
};

const putDrink = async (id, datos) => {
    try {
        const response = await axios.put(`${URL}/drink/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: " Error al editar categoria "}
    }
}

const deleteDrink = async (id) => {
    try {
        const response = await axios.delete(`${URL}/drink/${id}`);
        return response.data
    } catch (error) {
        throw error.response?.data || { message: " Error al eliminar categoria "};
    };
};

export {postDrink, getDrink, putDrink, deleteDrink};
