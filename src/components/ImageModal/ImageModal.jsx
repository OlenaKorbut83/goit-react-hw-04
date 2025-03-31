import Modal from "react-modal";
import "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={customStyles}
      // className="ImageModal"
      // overlayClassName="ImageModalOverlay"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
