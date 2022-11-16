const ModalOverlay = (props) => {
  return (
    <dialog className="modal__overlay" id="mo">
      <div className="modal__content">{props.children}</div>
    </dialog>
  )
}

export default ModalOverlay;
