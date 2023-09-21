import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Body from "./components/body1";
import Body2 from "./components/body2";
import nike from '../public/neek.gif'


function App() {

  return (
    <div className="App">
      <div className="gif">
        <img src={nike} />
      </div>
      <Header />
      <Hero />
      <Body />
      <Body2 />
    </div>
  );
}

export default App;
