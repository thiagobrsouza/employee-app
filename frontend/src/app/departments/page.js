import { Content } from "@/components/Content";
import Link from "next/link";

export default function Departments() {
  return (
    <Content title="Lista de Departamentos">

      <hr />

      <Link className="btn btn-primary" href="/departments/add">
        Novo Departamento
      </Link>

    </Content>
  )
}