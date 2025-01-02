const jwt = require('jsonwebtoken');

const authMiddleware = (roles) => {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ error: 'Acceso denegado. No se proporcionó un token' });
        }

        try {
            let decoded;
            try {
                decoded = jwt.verify(token, process.env.JWT_SECRET_CLIENTS);
            } catch (err) {
                decoded = jwt.verify(token, process.env.JWT_SECRET_ADMINS);
            }

            if (!roles.includes(decoded.role) && decoded.role !== 'admin') {
                return res.status(403).json({ error: 'No tienes los permisos necesarios' });
            }

            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ error: 'Token inválido' });
        }
    };
};

module.exports = authMiddleware;
