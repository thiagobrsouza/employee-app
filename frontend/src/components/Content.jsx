export function Content({ children, title, xxl, xl, lg, md, sm, xs }) {
  return (
    <div className="container mt-4 text-center">
      <h3>{ title }</h3>
      <div className="mt-5 row align-items-center justify-content-center">
        <div className={`col-xxl-${xxl} col-xl-${xl} col-lg-${lg} col-md-${md} col-sm-${sm} 
          col-xs-${xs}`}>
          {children}
        </div>
      </div>
    </div>
  )
}