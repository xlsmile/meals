const ModalOverlay = ({ children }) => {
  return (
    <div className="modal__overlay">
      <div className="modal__content">{children}</div>
    </div>
  );
};

export default ModalOverlay;
