import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
