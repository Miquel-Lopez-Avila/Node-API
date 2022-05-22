import getRepository from '../model/repository.js';

const UserService = () => {
    const UserRepository = getRepository();
    return {
        getAll: UserRepository.getAll,
        create: UserRepository.create,
        findOneBy: UserRepository.getById,
        update: UserRepository.update,
        destroy: UserRepository.destroy,
        findOrCreate: UserRepository.findOrCreate,
    }
}

export default UserService;