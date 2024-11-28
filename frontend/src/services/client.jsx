import axios from 'axios';

const registerClient = async (clientData) => {
    try {
        const response = await axios.post('http://localhost:3001/client/register', clientData);  
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al registrar el cliente" };
    }
};

const loginClient = async (loginData) => {
    try {
        const response = await axios.post('http://localhost:3001/client/login', loginData);  
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al iniciar sesión" };
    }
};

const getClientById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3001/client/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener el cliente" };
    }
};

const updateClient = async (id, updatedData) => {
    try {
        const response = await axios.put(`http://localhost:3001/api/client/${id}`, updatedData); 
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al actualizar el cliente" };
    }
};

const deleteClient = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3001/client/${id}`); 
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar el cliente" };
    }
};

export { registerClient, loginClient, getClientById, updateClient, deleteClient };
