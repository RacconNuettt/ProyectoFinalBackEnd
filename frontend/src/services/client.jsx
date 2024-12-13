import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;


const registerClient = async (clientData) => {
    console.log('Sending client data:', clientData);  

    try {
        const response = await axios.post(`${URL}/client/register`, clientData)
        return response.data;
    } catch (error) {
        console.error("Error response:", error.response);  
        throw error.response?.data || { message: "Error al registrar el cliente" };
    }
};

const loginClient = async (loginData) => {
    try {
        const response = await axios.post(`${URL}/client/login`, loginData);  
        sessionStorage.setItem('clientName', response.data.clientName); 
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al iniciar sesión" };
    }
};


const getAllClients = async () => {
    try {
        const response = await axios.get(`${URL}/client`); 
        return response.data;
    } catch (error) {
        console.error("Error al obtener los clientes:", error.response || error);
        throw error.response?.data || { message: "Error al obtener los clientes" };
    }
};

const getClientById = async (id) => {
    try {
        const response = await axios.get(`${URL}/client/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al obtener el cliente" };
    }
};

const updateClient = async (id, updatedData) => {
    try {
        const response = await axios.put(`${URL}/client/${id}`, updatedData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al actualizar el cliente" };
    }
};

const deleteClient = async (id) => {
    try {
        const response = await axios.delete(`${URL}/client/${id}`); // Fixed URL
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Error al eliminar el cliente" };
    }
};

export { registerClient, loginClient, getClientById, getAllClients, updateClient, deleteClient };
