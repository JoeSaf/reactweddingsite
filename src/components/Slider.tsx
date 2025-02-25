import React from "react";

// Create a require.context to dynamically load images
const images = [...Array(10)].map((_, index) =>
  require(`../assets/images/dragon_${index + 1}.jpg`)
);

const Slider: React.FC = () => {
  return (
    <div className="slider" style={{ "--quantity": 10 } as React.CSSProperties}>
      {images.map((image, index) => (
        <div
          key={index}
          className="item"
          style={{ "--position": index + 1 } as React.CSSProperties}
        >
          <img src={image} alt={`Dragon ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
