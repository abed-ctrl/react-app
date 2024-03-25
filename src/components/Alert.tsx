import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  alertType: string;
}

const Alert = ({ children, alertType }: Props) => {
  return <div className={"alert " + alertType}>{children}</div>;
};

export default Alert;
