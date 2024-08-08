import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";

function MyVerticallyCenteredModal({ modalOk, ...props }) {
  const [text, setText] = useState(props.modalContent);
  const handle = (e) => {
    if (e.key === "Enter") {
    } else if (e.key === "Shift") {
    } else if (e.key === "Alt") {
    } else if (e.key === "Delete") {
    } else if (e.key === "Backspace") {
      // console.log(text.splice(1, 0));
      setText(text.slice(0, -1));
    } else {
      setText(text + e.key);
    }
  };
  const handle_ok_button = () => {
    modalOk();
    props.onClose();
  };
  const handleClose = () => {
    props.onClose();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        className="reactmodal-header"
        onHide={props.onClose}
        closeButton
      >
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modaltitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="reactmodal-body form-group">
        {props.okText === "Connect" ? (
          <input className="form-control" type="text" onKeyDown={handle} />
        ) : (
          <div>{props.modalcontent}</div>
        )}
      </Modal.Body>
      <Modal.Footer className="reactmodal-footer">
        {props.oktext ? (
          <Button onClick={handle_ok_button}>{props.oktext}</Button>
        ) : (
          <></>
        )}
        <Button onClick={handleClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ReactModal({ children, title, content, okFunc, okText, ...props }) {
  const [modalShow, setModalShow] = React.useState(false);
  const clickFunction = () => {
    setModalShow(true);
    props?.paste?.();
  };

  return (
    <>
      {{
        ...children,
        props: { ...children.props, onClick: clickFunction },
      }}

      <MyVerticallyCenteredModal
        show={modalShow}
        modaltitle={title}
        modalcontent={content}
        modalOk={okFunc}
        oktext={okText}
        onClose={() => setModalShow(false)}
      />
    </>
  );
}

export default ReactModal;
