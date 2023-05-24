const Modal = ({ visible, onClose, image }) => {
    if (!visible) return null;
    return (
      <>
        <div className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center" onClick={onClose}>
          <img className="w-[400px]" src={image} alt="Modal Image" />
        </div>
      </>
    );
  };
  
  export default Modal;
  