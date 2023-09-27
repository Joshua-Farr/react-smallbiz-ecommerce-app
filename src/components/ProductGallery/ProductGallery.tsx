import "./ProdcutGallery.css";
import { useState } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery(props: ProductGalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const miniImages: string[] = [];

  //Rendering the mini product images under the hero image
  for (let i = 0; i < props.images.length; i++) {
    miniImages.push(props.images[i]);
  }

  let miniElements = miniImages.map((img) => {
    return <img src={`${img}`} alt="" className="mini-product-img" />;
  });

  //Toggling through all the images
  function handleImageChange(direction: number) {
    if (imageIndex === 0 && direction === -1) {
      setImageIndex(props.images.length - 1);
    } else if (imageIndex === props.images.length - 1 && direction === 1) {
      setImageIndex(0);
    } else {
      setImageIndex((index) => index + direction);
    }
  }

  return (
    <div className="gallery-wrapper">
      <div className="main-image-wrapper">
        <ArrowBackIosIcon
          className="back-arrow"
          onClick={() => {
            handleImageChange(-1);
          }}
        />
        <ArrowForwardIosIcon
          className="forward-arrow"
          onClick={() => {
            handleImageChange(1);
          }}
        />
        <img
          src={props.images[imageIndex]}
          alt=""
          className="main-product-image"
        />
      </div>
      <div className="mini-image-gallery">{miniElements}</div>
    </div>
  );
}
