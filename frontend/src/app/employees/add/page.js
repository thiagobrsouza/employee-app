import { Content } from "@/components/Content";
import Link from "next/link";

export default function AddEmployee() {
  return (
    <Content title="Adicionar/Editar um Funcionário">

      <hr />

      <Link className="btn btn-warning" href="/employees">
        Voltar a Lista
      </Link>

    </Content>
  )
}