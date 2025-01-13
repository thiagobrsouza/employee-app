import { Request, Response, Router } from "express";
import { DepartmentService } from "../services/DepartmentService";

export const departmentRoute = Router();
const service = new DepartmentService();

departmentRoute.post('/departments',
  async (req: Request, res: Response) => {
    const { name, notes } = req.body;
    const response = await service.create({ name, notes });
    res.status(201).json(response);
    return;
  }
);

departmentRoute.get('/departments',
  async (req: Request, res: Response) => {
    const response = await service.findAll();
    res.json(response);
    return;
  }
);

departmentRoute.get('/departments/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await service.findById(id);
    res.json(response);
    return;
  }
);

departmentRoute.put('/departments/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, notes } = req.body;
    const response = await service.update(id, { name, notes });
    res.json(response);
    return;
  }
);

departmentRoute.delete('/departments/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await service.deleteOne(id);
    res.json(response);
    return;
  }
);