const jwt = require('jsonwebtoken');

const authMiddleware = (roles) => (req, res, next) => {
    const token = req.headers['authorization']?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado. No se proporcionó un token' });
    }

    try {
        //esto que estoy haciendo aqui es realizando la validacion de roles
        let decoded;
        if (roles.includes('admin')) {
            decoded = jwt.verify(token, process.env.JWT_SECRET_ADMINS);
        } else {
            decoded = jwt.verify(token, process.env.JWT_SECRET_CLIENTS);
        }

        if (!roles.includes(decoded.role)) {
            return res.status(403).json({ error: 'No tienes los permisos necesarios' });
        }

        req.user = decoded; 
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};

module.exports = authMiddleware;
