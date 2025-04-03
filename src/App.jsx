import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState, useEffect } from "react";
import "./App.css";

const LOCAL_STORAGE_KEY = "color-theme";

function App() {
  const [colors, setColors] = useState(() => {
    const savedColors = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedColors ? JSON.parse(savedColors) : initialColors;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(colors));
  }, [colors]);

  function handleNewColor(newColor) {
    setColors([newColor, ...colors]);
  }

  function handleDeleteColor(colorId) {
    setColors(colors.filter((color) => color.id !== colorId));
  }
  function handleUpdateColor(updatedColor) {
    setColors(
      colors.map((color) =>
        color.id == updatedColor.id ? updatedColor : color
      )
    );
  }

  return (
    <>
      <h1>Color Theme Creator</h1>

      <ColorForm onSubmitColor={handleNewColor} />

      {colors.length === 0 ? (
        <h3>No colors yet. Start by adding one!</h3>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor}
            onUpdate={handleUpdateColor}
          />
        ))
      )}
    </>
  );
}

export default App;
