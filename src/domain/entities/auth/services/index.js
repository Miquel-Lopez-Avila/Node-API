import UserService from '../../user/service/index.js';
import { verifyAuthToken } from "../../../../common/adapters/auth/index.js";

const authService = () => {

    return {
        async signIn(providerToken) {
            const { id, email, email_verified } = await verifyAuthToken(providerToken);
            const user = await UserService().findOrCreate(id, email);
            return { user, verified: email_verified };
        },
    }
}

export default authService;