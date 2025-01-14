import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a href="" className="navbar-brand">Employee-App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/departments">
                Departamentos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/departments">
                Cargos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/departments">
                Funcionários
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}