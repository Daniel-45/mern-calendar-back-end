const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                ok: false,
                message: 'No existe un usuario con ese e-mail'
            });
        }

        // Check password
        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                message: 'La contraseña no es correcta'
            })
        }

        // Generate JWT
        const token = await generateJWT(user.id, user.name);

        return res.status(200).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: '500 Internal Server Error'
        });
    }

}

const register = async (req, res) => {

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                message: 'Ya existe un usuario con ese e-mail'
            });
        }

        user = new User(req.body);

        // Encrypt password
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        // Generate JWT
        const token = await generateJWT(user.id, user.name);

        return res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: '500 Internal Server Error'
        });
    }

}

const renewToken = async (req, res) => {

    const { uid, name } = req;

    // Generate a new JWT and return it in this request
    const token = await generateJWT(uid, name);

    return res.status(200).json({
        ok: true,
        token
    });

}

module.exports = {
    login,
    register,
    renewToken
}