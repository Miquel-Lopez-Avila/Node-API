import UserService from "../service/index.js";

export const getAll = async (req, res) => {
    const users = await UserService().getAll();
    res.json(users);
};

export const create = async (req, res) => {
    const { sal_name, sal_email } = req.body;
    const user = await UserService().create(sal_name, sal_email);
    res.json(user);
};

export const findOneById = async (req, res) => {
    const { id } = req.params;
    const user = await UserService().findOneBy(id);
    res.json(user);
};

export const update = async (req, res) => {
    const { sal_name, sal_location, sal_email, sal_phone } = req.body;
    const { id } = req.params;
    const user = await UserService().update(id, sal_name, sal_location, sal_email, sal_phone);
    res.json(user);
};

export const destroy = async (req, res) => {
    const { id } = req.params;
    const user = await UserService().destroy(id);
    res.json(user);
};

