import { ReactNode } from "react";

interface AlertProps {
  // text : string;
  // children:string // now we can use OG html tags // but we can use nested html tag
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children,onClose }: AlertProps) {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert;
