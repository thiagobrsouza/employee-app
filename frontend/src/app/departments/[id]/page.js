import AddDepartment from "../add/page";

export default function EditDepartment({ params }) {

  const { id } = params;

  return <AddDepartment params={{ id }} />
}