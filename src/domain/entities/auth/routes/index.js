import { signIn } from '../controller/index.js';
import { asyncHandler } from "../../../../common/helpers/index.js";

const authRoutes = app => {
    app.post('/api/auth', asyncHandler(signIn));
}

export default authRoutes;