import { useState } from "react";
import "./ColorInput.css";

export default function ColorInput({ id, name, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <label htmlFor="textInput">
        <input
          type="text"
          id={id}
          name={name}
          value={inputValue}
          onChange={handleInputValue}
        />
      </label>
      <label htmlFor="colorInput" className="color-picker">
        <input className="color-input" type="color" value={inputValue} onChange={handleInputValue} />
      </label>
    </>
  );
}
