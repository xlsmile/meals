import ReactDOM from "react-dom";
import ModalBackdrop from "./ModalBackdrop";
import ModalOverlay from "./ModalOverlay";

const Modal = ({ hideCartModal, children }) => {
  const portalId = document.getElementById("modal");
  return (
    <>
      {ReactDOM.createPortal(<ModalBackdrop onModalBackdropClick={hideCartModal} />, portalId)};
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalId)};
    </>
  );
};

export default Modal;
