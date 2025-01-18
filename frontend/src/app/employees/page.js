import { Content } from "@/components/Content";
import Link from "next/link";

export default function Employees() {
  return (
    <Content title="Lista de Funcionários">

      <hr />

      <Link className="btn btn-primary" href="/employees/add">
        Novo Funcionário
      </Link>

    </Content>
  )
}