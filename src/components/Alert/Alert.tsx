import React, { useState } from "react";
import classNames from "classnames";
import Transition from "../Transition/transition";

export type AlterType = "success" | "default" | "danger" | "warning";

export interface AlterProps {
  title: string;
  description?: string;
  type?: AlterType;
  onClose?: () => void;
  closable?: boolean;
}

export const Alter: React.FC<AlterProps> = props => {
  const [hide, setHide] = useState(false);
  const { title, description, type, onClose, closable } = props;

  const classes = classNames("viking-alert", {
    [`viking-alert-${type}`]: type,
  });
  const titleClass = classNames("viking-alert-title", {
    "bold-title": description,
  });

  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };

  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-top">
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="viking-alert-desc">{description}</p>}
        {closable && (
          <span className="viking-alert-close" onClick={handleClose}>
            {" "}
            X{" "}
          </span>
        )}
      </div>
    </Transition>
  );
};

Alter.defaultProps = {
  type: "default",
  closable: true,
};

export default Alter;
