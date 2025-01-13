import { Router } from "express";
import { departmentRoute } from "./controllers/DepartmentController";
import { roleRoute } from "./controllers/RoleController";
import { employeeRoute } from "./controllers/EmployeeController";

export const routes = Router();

routes.use(departmentRoute);
routes.use(roleRoute);
routes.use(employeeRoute);