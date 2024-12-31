// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/context/authContext';

const ProtectedRoute = ({ children, adminOnly }) => {
    const { user, isAdmin } = useAuth();

    if (!user) {
        return <Navigate to='/login' />;
    }

    if (adminOnly && !isAdmin) {
        return <Navigate to='/home' />; 
    }

    return children;
};

export default ProtectedRoute;
