import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

const Modal = ({children}) => {
  const portalId = document.getElementById("modal");
  return (
    <>
    {/* no need for an additional backdrop */}
      {ReactDOM.createPortal((<ModalOverlay>{children}</ModalOverlay>), portalId)};
    </>
  )
}

export default Modal;
