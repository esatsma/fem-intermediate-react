import { useState } from "react";

export const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  const carouselImages = images
    ? images
    : ["http://pets-images.dev-apis.com/pets/none.jpg"];

  const handleIndexClick = (e) => {
    setActive(+e.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={carouselImages[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
            onClick={(e) => handleIndexClick(e)}
            data-index={index}
          />
        ))}
      </div>
    </div>
  );
};
