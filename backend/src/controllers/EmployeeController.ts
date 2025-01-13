import { Request, Response, Router } from "express";
import { EmployeeService } from "../services/EmployeeService";

export const employeeRoute = Router();
const service = new EmployeeService();

employeeRoute.post('/employees',
  async (req: Request, res: Response) => {
    const { firstName, lastName, gender, rg, cpf, birthDate, admissionDate, dismissalDate, salary, roleId } = req.body;
    const response = await service.create({
      firstName, lastName, gender, rg, cpf, birthDate, admissionDate, dismissalDate, salary, roleId
    });
    res.status(201).json(response);
    return;
  }
);

employeeRoute.get('/employees',
  async (req: Request, res: Response) => {
    const response = await service.findAll();
    res.json(response);
    return;
  }
);

employeeRoute.get('/employees/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await service.findById(id);
    res.json(response);
    return;
  }
);

employeeRoute.put('/employees/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { firstName, lastName, gender, rg, cpf, birthDate, admissionDate, dismissalDate, salary, roleId } = req.body;
    const response = await service.update(id, {
      firstName, lastName, gender, rg, cpf, birthDate, admissionDate, dismissalDate, salary, roleId
    });
    res.json(response);
    return;
  }
);

employeeRoute.delete('/employees/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await service.deleteOne(id);
    res.json(response);
    return;
  }
);