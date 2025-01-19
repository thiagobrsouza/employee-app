'use client'
import { Content } from "@/components/Content";
import { http } from "@/services/http";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function AddDepartment({ params }) {

  const { id } = params || {};
  const router = useRouter();
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (id) {
      async function fetchData() {
        try {
          const response = await http.get(`/departments/${id}`);
          setName(response.data.name);
          setNotes(response.data.notes);
        } catch (err) {
          toast.error("Erro ao carregar dados.");
        }
      }
      fetchData();
    }
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (id) {
        await http.put(`/departments/${id}`, { name, notes });
        toast.success('Departamento alterado com sucesso!');  
      } else {
        await http.post('/departments', { name, notes });
        toast.success('Departamento salvo com sucesso!');
        setName('');
        setNotes('');
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <Content title="Adicionar/Editar um Departamento"
      xxl="4" xl="4" lg="6" md="8" sm="10" xs="12">

      <form onSubmit={handleSubmit}>
        <label className="form-label">Nome:</label>
        <input className="form-control mb-3" type="text" value={name}
          onChange={(e) => setName(e.target.value)} required />
        <label className="form-label">Observações:</label>
        <textarea className="form-control mb-3" rows="5"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}></textarea>

        <button className="btn btn-success" type="submit">Salvar</button>
      </form>

      <hr />

      <Link className="btn btn-warning" href="/departments">
        Voltar a Lista
      </Link>

    </Content>
  )
}