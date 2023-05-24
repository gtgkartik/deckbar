const Modal = ({ visible, onClose }) => {
  if (!visible) return null;
  return (
    <>
      <div className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center" onClick={onClose}>
        <img className="w-[400px]" src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1" />
      </div>
    </>
  );
};

export default Modal;
