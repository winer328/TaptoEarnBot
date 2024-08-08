// import { Modal, Button, IconButton } from "@telegram-apps/telegram-ui";
import { useState } from "react";
// import { IoCloseCircleOutline } from "react-icons/io5";
// import { Modal, Button } from "@xelene/tgui";

import "./styles.css";

const Itemview = ({
  header,
  footer,
  onClick,
  modalContent,
  buttonName,
  modalHeaderTitle,
  ...props
}) => {
  // const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="itemview"
        style={{ backgroundColor: "gray", ...props }}
        onClick={onClick}
      >
        {header && (
          <div className="itemview-header">
            <img className="item-img" src={header} />
          </div>
        )}
        <div className="itemview-body">{props.children}</div>
        {footer && (
          <div className="itemview-footer">
            <img className="item-img" src={footer} />
          </div>
        )}
      </div>
    </>
  );
};

export default Itemview;
