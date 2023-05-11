import React, { useState } from "react";
import "./_categoriesBar.css";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art",
  "Guitar",
  "1980 Rock and Roll",
  "AI in programing",
  "Gun N Roses",
  "Coldplay Concert",
  "Coffee Shop Hype",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const handleClick = (value) => {
    setActiveElement(value);
  };
  return (
    <div className="categories-bar">
      {keywords.map((value, i) => (
        <span
          key={i}
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
