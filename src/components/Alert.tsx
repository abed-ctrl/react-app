// using ES7+ extension
// create a react component we use rafce

import { ReactNode } from "react";

interface Props {
  //text: string;
  //this why there is a special prop that all component support called children
  //children: string;
  // pass html content
  children: ReactNode;
  alertType: string;
}

const Alert = ({ children, alertType }: Props) => {
  return <div className={"alert " + alertType}>{children}</div>;
};

export default Alert;
