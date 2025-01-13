import { Router } from "express";
import { departmentRoute } from "./controllers/DepartmentController";
import { roleRoute } from "./controllers/RoleController";

export const routes = Router();

routes.use(departmentRoute);
routes.use(roleRoute);