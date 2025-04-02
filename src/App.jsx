import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleNewColor(newColor) {
    console.log("newColor", newColor);
    setColors([newColor, ...colors]);
  }
  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onSubmitColor={handleNewColor} />

      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
