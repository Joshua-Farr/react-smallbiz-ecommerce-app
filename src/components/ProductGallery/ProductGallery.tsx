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
  for (let i = 1; i < props.images.length; i++) {
    miniImages.push(props.images[i]);
  }

  let miniElements = miniImages.map((img) => {
    return <img src={`${img}`} alt="" className="mini-product-img" />;
  });

  return (
    <div className="gallery-wrapper">
      <div className="main-image-wrapper">
        <ArrowBackIosIcon className="back-arrow" />
        <ArrowForwardIosIcon className="forward-arrow" />
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
