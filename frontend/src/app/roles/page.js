import { Content } from "@/components/Content";
import Link from "next/link";

export default function Roles() {
  return (
    <Content title="Lista de Cargos">

      <hr />

      <Link className="btn btn-primary" href="/roles/add">
        Novo Cargo
      </Link>

    </Content>
  )
}