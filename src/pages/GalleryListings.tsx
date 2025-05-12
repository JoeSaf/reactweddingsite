import React from "react";
import AnimatedList from "../components/AnimatedList";

const GalleryListings: React.FC = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  return (
    <div className="gallery-listings">
      <h2>Gallery Listings</h2>
      <AnimatedList
        items={items}
        onItemSelect={(item, index) => console.log("Selected:", item, index)}
        showGradients={true}
        enableArrowNavigation={true}
        displayScrollbar={true}
      />
    </div>
  );
};

export default GalleryListings;
