import { prisma } from "../prisma";

interface Employee {
  firstName: string;
  lastName: string;
  gender: string;
  rg: string;
  cpf: string;
  birthDate: string;
  admissionDate: string;
  dismissalDate?: string;
  salary: string;
  roleId: string;
}

export class EmployeeService {

  async create({ firstName, lastName, gender, rg, cpf, birthDate, admissionDate, dismissalDate, salary, roleId }: Employee) {
    try {
      const employee = await prisma.employee.create({
        data: { firstName, lastName, gender, rg, cpf, birthDate, admissionDate, dismissalDate, salary, 
          role: { connect: { id: roleId } } }
      });
      return employee;
    } catch {
      throw new Error('Funcionário já cadastrado!')
    }
  }

  async findAll() {
    return await prisma.employee.findMany({
      include: {
        role: { include: { department: true } }
      }
    });
  }

  async findById(id: string) {
    const employee = await prisma.employee.findFirst({
      where: { id },
      include: {
        role: { include: { department: true } }
      }
    });
    return employee;
  }

  async update(id: string, { firstName, lastName, gender, rg, cpf, birthDate, admissionDate, dismissalDate, salary, roleId }: Employee) {
    try {
      const employee = await prisma.employee.update({
        where: { id },
        data: { firstName, lastName, gender, rg, cpf, birthDate, admissionDate, dismissalDate, salary, 
          role: { connect: { id: roleId } } }
      });
      return employee;
    } catch {
      throw new Error('Funcionário já cadastrado!');
    }
  }

  async deleteOne(id: string) {
    try {
      await prisma.employee.delete({
        where: { id }
      });
    } catch {
      throw new Error('Não foi possível excluir o funcionário');
    }
  }
}