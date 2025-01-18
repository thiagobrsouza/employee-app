import { Content } from "@/components/Content";
import Link from "next/link";

export default function AddRole() {
  return (
    <Content title="Adicionar/Editar um Cargo">

      <hr />

      <Link className="btn btn-warning" href="/roles">
        Voltar a Lista
      </Link>

    </Content>
  )
}