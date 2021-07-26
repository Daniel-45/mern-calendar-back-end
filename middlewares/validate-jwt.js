const jwt = require('jsonwebtoken');

const validateJWT = async (req, res, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            message: 'No hay token en la petición'
        });
    }
    
    // Validate token
    try {
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = uid;
        req.name = name;

    } catch (error) {
        console.log(error);
        res.status(401).json({
            ok: false,
            message: 'El token no es válido'
        });
    }

    next();

}

module.exports = {
    validateJWT
}