import { prisma } from "../prisma";

interface Department {
  name: string;
  notes?: string;
}

export class DepartmentService {

  async create({ name, notes }: Department) {
    try {
      const department = await prisma.department.create({
        data: { name, notes }
      });
      return department;
    } catch {
      throw new Error('Departamento já cadastrado!')
    }
  }

  async findAll() {
    return await prisma.department.findMany();
  }

  async findById(id: string) {
    const department = await prisma.department.findFirst({
      where: { id }
    });
    return department;
  }

  async update(id: string, { name, notes }: Department) {
    try {
      const department = await prisma.department.update({
        where: { id },
        data: { name, notes }
      });
      return department;
    } catch {
      throw new Error('Departamento já cadastrado!');
    }
  }

  async deleteOne(id: string) {
    try {
      await prisma.department.delete({
        where: { id }
      });
    } catch {
      throw new Error('Departamento possui relação com Cargos');
    }
  }
}