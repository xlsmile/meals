const ModalOverlay = (props) => {
  return (
    <div className="modal__overlay">
      <div className="modal__content">{props.children}</div>
    </div>
  )
}

export default ModalOverlay;
