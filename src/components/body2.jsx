import React from "react";
import { left } from "webgi";

function Body2() {


  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      left: 0
    })
  }

  return (
    <div className="body2">
      <h1>NIKE STRUCTURE 25</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        laborum vitae pariatur, quisquam quae.
      </p>
      <button className="learn-more2" onClick={handleClick}>Back to Top</button>
    </div>
  );
}

export default Body2;
