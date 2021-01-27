import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { PortalProps } from "./models";

const Portal = ({ children, id }: PortalProps) => {
  const element = useRef(
    document.getElementById(id) || document.createElement("div")
  );

  const [current] = useState(!element.current.parentElement);

  useEffect(() => {
    if (current) {
      element.current.id = id;
    }
    return () => {
      if (current && element.current.parentElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        element.current.parentElement.removeChild(element.current);
      }
    };
  }, [current, id]);

  return ReactDOM.createPortal(children, element.current);
};

export default Portal;
