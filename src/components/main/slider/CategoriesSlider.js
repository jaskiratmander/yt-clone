import "./CategoriesSlider.css";
import { useRef, useState } from "react";

const dummySliderData = [
  "All",
  "Music",
  "Mixes",
  "Samsung",
  "Gaming",
  "Karan Aujla",
  "Live",
  "Justin Bieber",
  "Bhangra",
  "Comedy",
  "Beats",
  "NBA",
  "Chill-out music",
  "Cars",
  "Conversation",
  "Minecraft",
  "Recently uploaded",
  "New to you",
];

const CategoriesSlider = () => {
  const sliderRef = useRef(null);

  const [leftVisible, setLeftVisible] = useState(true);
  const [rightVisible, setRightVisible] = useState(false);

  function makeScroll(direction) {
    let container = sliderRef.current;
    if (direction === "right")
      container.scrollLeft += 0.2 * container.scrollWidth;
    else container.scrollLeft -= 0.2 * container.scrollWidth;
  }

  function handleScroll() {
    let container = sliderRef.current;
    if (
      Math.floor(container.scrollLeft) + Math.floor(container.clientWidth) >
      Math.floor(container.scrollWidth) * 0.98
    ) {
      setLeftVisible(false);
    } else {
      setLeftVisible(true);
    }
    if (container.scrollLeft > 0) {
      setRightVisible(true);
    } else setRightVisible(false);
  }

  return (
    <div className="slider_wrapper">
      <button
        onClick={() => {
          makeScroll("left");
        }}
        className="scroll_btn scroll_btn--left"
        style={{ display: rightVisible ? "inline-block" : "none" }}
      >
        <span className="material-symbols-outlined slider_icon">
          arrow_back_ios
        </span>
      </button>
      <div
        className="categories_slider"
        ref={sliderRef}
        onScroll={handleScroll}
      >
        {dummySliderData.map((text, index) => (
          <button
            key={index}
            className={`sliding_item ${
              index === 0 ? "sliding_item_active" : ""
            }`}
          >
            {text}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          makeScroll("right");
        }}
        className="scroll_btn scroll_btn--right"
        style={{ display: leftVisible ? "inline-block" : "none" }}
      >
        <span className="material-symbols-outlined slider_icon">
          arrow_forward_ios
        </span>
      </button>
    </div>
  );
};

export default CategoriesSlider;
