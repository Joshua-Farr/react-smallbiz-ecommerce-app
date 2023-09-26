import "./ProdcutGallery.css";
import { useState } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery(imageArray: ProductGalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="gallery-wrapper">
      <div className="main-image-wrapper">
        <ArrowBackIosIcon className="back-arrow" />
        <ArrowForwardIosIcon className="forward-arrow" />
        <img
          src={imageArray[imageIndex]}
          alt=""
          className="main-product-image"
        />
      </div>
      <div className="mini-image-gallery">
        <img src="" alt="" className="mini-product-img" />
        <img src="" alt="" className="mini-product-img" />
        <img src="" alt="" className="mini-product-img" />
        <img src="" alt="" className="mini-product-img" />
      </div>
    </div>
  );
}
