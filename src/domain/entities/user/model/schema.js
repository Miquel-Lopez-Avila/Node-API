import { DataTypes, db } from '../../../../common/adapters/database/index.js';

const User = db.define('User', {
    sal_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sal_location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sal_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sal_phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    auth0_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sal_brand: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
});


export default User;