import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Carousel from "./Carousel";
import SlickCarousel from "./SlickCarousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Carousel /> */}
      <SlickCarousel />
    </div>
  );
}

export default App;
