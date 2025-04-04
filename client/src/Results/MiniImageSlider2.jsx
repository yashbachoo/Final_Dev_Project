import React from "react";



export default function MiniImageSlider2() {
  return (
    <div >
      <div className="flex w-[200%] animate-scroll">
        {/* Image List - Repeat for seamless effect */}
        {Array(2)
          .fill([
            "Polytechnics.jpg",
            "MITD.jpg",
            "curtin.png",
            "devinstitute.png"
          ])
          .flat()
          .map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index}`}
              className="ImageSlider2"
            />
          ))}
      </div>
    </div>
  );
};