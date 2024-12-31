import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
            } catch (error) {
                console.error('Error decoding token:', error);
                sessionStorage.removeItem('token');
                setUser(null);
            }
        }
    }, []);

    const login = (token) => {
        const decoded = jwtDecode(token);
        setUser(decoded);
        sessionStorage.setItem('token', token);
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('token');
        navigate('/login');
    };

    const value = {
        user,
        login,
        logout,
        isAdmin: user?.role === 'admin',
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
