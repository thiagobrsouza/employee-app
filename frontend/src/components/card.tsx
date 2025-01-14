import { ReactNode } from "react";

interface CardProps {
  xxl?: string;
  xl?: string;
  lg?: string;
  md?: string;
  sm?: string;
  xs?: string;
  children: ReactNode;
}

export function Card({ xxl, xl, lg, md, sm, xs, children }: CardProps) {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className={`col-xxl-${xxl} col-xl-${xl} col-lg-${lg} col-md-${md} col-sm-${sm} col-xs-${xs}`}>
          {children}
        </div>
      </div>
    </div>
  )
}