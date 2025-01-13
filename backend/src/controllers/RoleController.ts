import { Request, Response, Router } from "express";
import { RoleService } from "../services/RoleService";

export const roleRoute = Router();
const service = new RoleService();

roleRoute.post('/roles',
  async (req: Request, res: Response) => {
    const { name, notes, departmentId } = req.body;
    const response = await service.create({ name, notes, departmentId });
    res.status(201).json(response);
    return;
  }
);

roleRoute.get('/roles',
  async (req: Request, res: Response) => {
    const response = await service.findAll();
    res.json(response);
    return;
  }
);

roleRoute.get('/roles/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await service.findById(id);
    res.json(response);
    return;
  }
);

roleRoute.put('/roles/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, notes, departmentId } = req.body;
    const response = await service.update(id, { name, notes, departmentId });
    res.json(response);
    return;
  }
);

roleRoute.delete('/roles/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await service.deleteOne(id);
    res.json(response);
    return;
  }
);