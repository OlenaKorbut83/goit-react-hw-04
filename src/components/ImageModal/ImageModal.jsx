import Modal from "react-modal";
import "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="ImageModal"
      overlayClassName="ImageModalOverlay"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
