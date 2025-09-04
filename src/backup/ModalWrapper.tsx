function ModalWrapper({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
}

export default ModalWrapper;
