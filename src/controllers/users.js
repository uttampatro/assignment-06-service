const { login, register } = require('../services/userService');

const registerUser = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await register({ email, password });
        return res.send(user.email);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await login({ email, password });
        if (!user) {
            return res.status(404).send('error');
        }
        return res.send(user.email);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};
module.exports = { registerUser, loginUser };
