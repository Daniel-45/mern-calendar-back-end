/** 
 * Auth routes
 * /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const {
    login,
    register,
    renewToken
} = require('../controllers/auth.contoller');

const router = Router();

router.post('/', [
    check('email', 'El e-mail es obligatorio y debe tener un formato correcto').isEmail(),
    check('password',
        'La contraseña es obligatoria y debe tener mínimo 6 caracteres')
        .isLength({ min: 6 }),
    validateFields
], login);

router.post('/register', [
    check('name', 'El nombre es obligatorio y debe tener mínimo 3 caracteres').isLength({ min: 3 }),
    check('email', 'El e-mail es obligatorio y debe tener un formato correcto').isEmail(),
    check('password',
        'La contraseña es obligatoria y debe tener mínimo 6 caracteres')
        .isLength({ min: 6 }),
    validateFields
], register);

router.get('/renew', validateJWT, renewToken);

module.exports = router;