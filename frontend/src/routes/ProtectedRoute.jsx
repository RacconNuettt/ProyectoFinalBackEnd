/* import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const isAdmin = localStorage.getItem('isAdmin');

    if (!isAuthenticated) {
        return <Navigate to="/Login" />;
    }
    if (isAuthenticated && isAdmin === 'true') {
        return children;  
    }

    return <Navigate to="/Home" />;
};

export default ProtectedRoute; */
