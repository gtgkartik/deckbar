const Modal = ({ isVisible, onClose, children}) => {

  if (!isVisible) return null;

  const handleClose = (e) => {
      if (e.target.id === 'wrapper') onClose();
  }
  return (
    <>
      <div className="fixed z-10 backdrop-blur-sm inset-0 bg-black bg-opacity-30 flex justify-center items-center " id="wrapper" onClick={handleClose}>
        {children}
      </div>
    </>
  );
};

export default Modal;
