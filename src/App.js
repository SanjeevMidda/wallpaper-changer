import "./index.css";
import { useRef, useState } from "react";

function App() {
  const appReference = useRef();
  const [color, setColor] = useState("white");

  const changeColor = () => {
    let redColor = Math.floor(Math.random() * 256);
    let blueColor = Math.floor(Math.random() * 256);
    let greenColor = Math.floor(Math.random() * 256);

    setColor(
      (appReference.current.style.backgroundColor = `rgb(${redColor}, ${blueColor}, ${greenColor})`)
    );
  };

  return (
    <div
      className="App"
      onClick={changeColor}
      ref={appReference}
      style={{ backgroundColor: { color } }}
    ></div>
  );
}

export default App;

// When I click on the main page screen, the color changes to a new one
// - INPUT: click on screen OUTPUT: screen color changes

// Select main element
// Create event listener
// Create function to change color of it's style
