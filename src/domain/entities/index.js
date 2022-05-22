import userRoutes from "./user/routes/index.js";
import authRoutes from "./auth/routes/index.js";
import handleErrors from "../../application/middleware/handle-errors.js";

const Routes = app => {
    userRoutes(app);
    app.use(handleErrors);
}

export default Routes;