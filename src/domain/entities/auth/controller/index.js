import AuthService from '../services/index.js'

export const signIn = async (req, res) => {
    const { token } = req.body;
    console.log(token);
    const user = await AuthService().signIn(token);
    res.json(user);
};