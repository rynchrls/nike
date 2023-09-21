import React from "react";
import Viewer from "./Viewer";

function Hero() {

  const handleClick = () => {
    const element = document.querySelector('.body')
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="hero">
      <div className="hero-wrapper">
        <h3>Bring your fashion to the next level</h3>
        <h1>Nike TC 7900 Sail</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta enim
          corporis tempore necessitatibus voluptate eligendi nesciunt ratione.
          Officia, exercitationem? Qui vero accusamus obcaecati labore animi
          quos aliquid excepturi perferendis reiciendis!
        </p>
        <div className="buttons">
          <button className="landing">Check it out</button>
          <button className="learn-more" onClick={handleClick}>Learn more</button>
        </div>
      </div>
      <Viewer />
    </div>
  );
}

export default Hero;
