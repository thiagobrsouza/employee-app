# Escopo do Projeto

## Sobre
O projeto é básico, para estudos de programação criando uma API e uma aplicação Web que irá basicamente cadastrar funcionários de uma empresa, departamentos e cargos.

## Escopo
- Usuário cadastra um departamento
- Usuário cadastra um cargo e deve associá-lo a um departamento
- Usuário cadastra um funcionário e deve associá-lo a um cargo

## Ferramentas usadas
- NodeJs
- Typescript
- PostgresSQL
- NextJS

## Modelos do sistema
- Department
  - id
  - name
  - notes

- Role
  - id
  - name
  - department_id
  - notes

- Employee
  - id
  - first name
  - last name
  - gender
  - rg
  - cpf
  - birth date
  - admission date
  - dismissal date
  - salary
  - role_id
  notes
