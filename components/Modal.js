// import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleModalClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="modal_overlay absolute inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="modal_container bg-white w-80 h-5/6 rounded-2xl p-4">
        <div className="modal_header flex justify-end text-lg">
          <a href="#">
            <button onClick={handleModalClose}>
              <MdClose />
            </button>
          </a>
        </div>
        <div className="modal_body pt-6">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
