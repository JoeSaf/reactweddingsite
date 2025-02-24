import React from "react";

const Slider: React.FC = () => {
  return (
    <div className="slider" style={{ "--quantity": 10 } as React.CSSProperties}>
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="item"
          style={{ "--position": index + 1 } as React.CSSProperties}
        >
          <img src={`/src/assets/images/dragon_${index + 1}.jpg`} alt={`Dragon ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
