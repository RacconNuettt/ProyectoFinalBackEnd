const handleUpdate = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");
    if (!token) {
        toast.error("No se encontró el token.");
        return;
    }

    const decodedToken = jwtDecode(token);
    const idC = decodedToken.id;

    const newData = {
        clientname: newClientName,
        clientemail: newClientEmail,
        clientpassword: newClientPassword,
    };

    try {

        const response = await updateClient(idC, newData);
        if (response) {
            toast.success("Datos actualizados exitosamente.");
            setShowModal(false); // Close the modal
        } else {
            toast.error("Respuesta inesperada del servidor.");
        }

    } catch (error) {
        console.error("Error al actualizar datos:", error);
        toast.error(error?.message || "Error al conectar con el servidor.");
    }
};