import React, { useRef } from "react"
import { Context } from "../../provider/Provider";
import "./modal.styles.scss";

const Modal = ({ renderContent = () => <div>Hello</div>, isOpen, handleIsOpenModal }) => {

    const modalRef = useRef();

    return (
        <div ref={modalRef} className={`modal${isOpen ? " open" : ""}`} onClick={(e) => handleIsOpenModal(e, modalRef)}>
            {renderContent()}
        </div>
    )
}

export default Modal;
