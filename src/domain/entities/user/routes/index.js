import checkJwt from '../../../../common/middleware/private-access.js'
import { getAll, create, findOneById, update, destroy } from '../controller/index.js';
import { asyncHandler } from "../../../../common/helpers/index.js";
import {signIn} from "../../auth/controller/index.js";

const userRoutes = app => {
    app.get('/api/users', checkJwt, asyncHandler(getAll));
    app.get('/api/user', checkJwt, asyncHandler(findOneById));
    app.post('/api/user', checkJwt, asyncHandler(create));
    app.put('/api/user', checkJwt, asyncHandler(update));
    app.delete('/api/user', checkJwt, asyncHandler(destroy));
    app.post('/api/auth', asyncHandler(signIn));
}

export default userRoutes;