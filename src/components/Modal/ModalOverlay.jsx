const ModalOverlay = (props) => {
  return (
    <dialog className="modal">
      <div className="modal__content">{props.children}</div>
    </dialog>
  )
}

export default ModalOverlay;
