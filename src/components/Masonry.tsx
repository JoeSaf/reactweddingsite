import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Masonry.css";

interface MasonryItem {
  id: string | number;
  height: number;
  image: string;
}

interface GridItem extends MasonryItem {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface MasonryProps {
  data: MasonryItem[];
}

const Masonry: React.FC<MasonryProps> = ({ data }) => {
  const [columns, setColumns] = useState<number>(2);
  const gap = 18; // Space between items

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1500) {
        setColumns(3);
      } else if (window.innerWidth >= 1000) {
        setColumns(4);
      } else if (window.innerWidth >= 600) {
        setColumns(3);
      } else {
        setColumns(2);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [heights, gridItems] = useMemo<[number[], GridItem[]]>(() => {
    const heights = new Array(columns).fill(0);
    const columnWidth = width / columns - gap; // Adjust for spacing

    const gridItems = data.map((item) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = column * (columnWidth + gap);
      const y = heights[column];

      heights[column] += item.height + gap; // Add vertical spacing

      return {
        ...item,
        x,
        y,
        width: columnWidth,
        height: item.height,
      };
    });

    return [heights, gridItems];
  }, [columns, data, width]);

  return (
    <div
      ref={ref}
      className="masonry"
      style={{
        height: Math.max(...heights),
        display: "flex",
        flexWrap: "wrap",
        gap: `${gap}px`,
      }}
    >
      <AnimatePresence>
        {gridItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
              width: item.width,
              height: item.height,
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Masonry;
