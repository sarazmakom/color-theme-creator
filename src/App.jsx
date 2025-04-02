import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleNewColor(newColor) {
    setColors([newColor, ...colors]);
  }

  function handleDeleteColor(colorId) {
    setColors(colors.filter((color) => color.id !== colorId));
  }

  return (
    <>
      <h1>Color Theme Creator</h1>

      <ColorForm onSubmitColor={handleNewColor} />

      {colors.length === 0 ? (
        <p>No colors yet. Start by adding one!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor} 
          />
        ))
      )}
    </>
  );
}

export default App;
