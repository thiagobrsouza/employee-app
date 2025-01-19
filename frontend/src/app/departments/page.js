'use client';
import { Content } from "@/components/Content";
import { http } from "@/services/http";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Departments() {

  const [departments, setDepartments] = useState([]);

  async function fetchDepartments() {
    const response = await http.get('/departments');
    setDepartments(response.data);
    console.log(response.data);
  }

  async function handleDelete(id) {
    if (confirm('Tem certeza que deseja excluir este departamento?')) {
      try {
        await http.delete(`/departments/${id}`);
        toast.success('Departamento excluído com sucesso!');
        fetchDepartments();
      } catch (error) {
        toast.error(error.response.data.error);
      }
    }
  }

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <Content title="Lista de Departamentos"
      xxl="6" xl="8" lg="8" md="10" sm="12" xs="12">

      <Link className="btn btn-primary" href="/departments/add">
        Novo Departamento
      </Link>
      <hr />

      <div className="table-responsive" style={{ maxHeight: "400px", overflowY: "auto" }}>
        <table className="table table-hover table-fixed-header">
          <thead className="table-header">
            <tr>
              <th className="col">Nome</th>
              <th className="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {
              departments.map(dep => (
                <tr key={dep.id}>
                  <td>{dep.name}</td>
                  <td>
                    <Link href={`/departments/${dep.id}`} className="btn btn-primary">
                      Editar
                    </Link>
                    <button className="ms-1 btn btn-danger" onClick={() => handleDelete(dep.id)}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </Content>
  )
}