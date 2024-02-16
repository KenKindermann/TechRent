// Hooks
import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(images[0].fields.file.url);

  return (
    <div className="flex flex-col justify-center">
      <img src={currentImg} alt="main product image" style={{ height: "450px", objectFit: "contain" }} />

      <div className="flex justify-center mt-4 gap-4">
        {images?.map((image) => (
          <div
            className="bg-slate-700 bg-opacity-20 hover:bg-opacity-40 cursor-pointer transition ease-in-out p-2"
            onMouseEnter={() => setCurrentImg(image.fields.file.url)}
          >
            <img src={image.fields.file.url} alt="" style={{ height: "80px", width: "80px", objectFit: "contain" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
