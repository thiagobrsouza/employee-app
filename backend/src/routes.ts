import { Router } from "express";
import { departmentRoute } from "./controllers/DepartmentController";

export const routes = Router();

routes.use(departmentRoute);