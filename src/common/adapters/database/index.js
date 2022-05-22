import sequelize from 'sequelize';
const { Sequelize, DataTypes } = sequelize;

export const db = new Sequelize('postgres://postgres:1234@localhost:5432/postgres');

const Connect = () => {
    return db.authenticate().then(() => db.sync());
}

export {
    DataTypes,
};

export default Connect;