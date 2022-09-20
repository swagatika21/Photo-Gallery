import React, { useState } from "react";

function Card() {
  const [image, setImage] = useState([]);

  function onImageChange(event) 
  {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImage((previousImages) => previousImages.concat(imagesArray));
  }

  return (
    < >
      <input
        type="file"
        multiple
        onChange={onImageChange}
        accept="image/png , image/jpeg, image/webp"
        id="my-btn"
        hidden
      />
      <label for="my-btn" className="label">
      <i className="fa-solid fa-xl fa-circle-plus plus"></i>
        Select Image
      </label>
      <div className="result">
      {image.map((imageSrc) => (
          
          <img alt="Your_memory" src={imageSrc} />
      
      ))}
    </div>
    </>
  );
}
export default Card;