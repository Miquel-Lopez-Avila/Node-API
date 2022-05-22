import UserSchema from './schema.js';

const UserRepository = () => (
    {
        getAll: () => UserSchema.findAll(),
        getById: (id) => UserSchema.findByPk(id),
        create: (sal_name, sal_email) => UserSchema.create({sal_name: sal_name, sal_email: sal_email}),
        update: (id, sal_name, sal_location, sal_email, sal_phone) => (
            UserSchema.update({sal_name: sal_name, sal_email: sal_email, sal_location: sal_location, sal_phone: sal_phone})
        ),
        destroy: (id) => UserSchema.destroy(id),
        findOrCreate: (auth0_id, email, name) => UserSchema.findOrCreate({where: {auth0_id}, defaults: {sal_email: email, sal_name:  name}}),
    }
);

export default UserRepository;