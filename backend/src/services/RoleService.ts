import { prisma } from "../prisma";

interface Role {
  name: string;
  notes?: string;
  departmentId: string;
}

export class RoleService {

  async create({ name, notes, departmentId }: Role) {
    try {
      const role = await prisma.role.create({
        data: { name, notes, department: { connect: { id: departmentId } } }
      });
      return role;
    } catch {
      throw new Error('Cargo já cadastrado!')
    }
  }

  async findAll() {
    return await prisma.role.findMany({
      include: { department: true }
    });
  }

  async findById(id: string) {
    const role = await prisma.role.findFirst({
      where: { id },
      include: { department: true }
    });
    return role;
  }

  async update(id: string, { name, notes, departmentId }: Role) {
    try {
      const role = await prisma.role.update({
        where: { id },
        data: { name, notes, department: { connect: { id: departmentId } } }
      });
      return role;
    } catch {
      throw new Error('Cargo já cadastrado!');
    }
  }

  async deleteOne(id: string) {
    try {
      await prisma.role.delete({
        where: { id }
      });
    } catch {
      throw new Error('Cargo possui relação com Funcionários');
    }
  }
}