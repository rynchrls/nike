import React from "react";

function Body() {

  const handleClick2 = () => {
    const element = document.querySelector('.body2')
    window.scrollTo({
      top: element.getBoundingClientRect().bottom,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="body">
      <div className="body-wrapper">
        <h1>FLIGHT HERITAGE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          asperiores, accusamus enim ipsa iure dolore, repudiandae rerum ex
          quidem maiores aperiam eligendi voluptatibus nihil quis? Consequatur
          earum corporis beatae temporibus?
        </p>
        <button className="learn-more2" onClick={handleClick2}>Learn more</button>
      </div>
    </div>
  );
}

export default Body;
