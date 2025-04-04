import { useState } from "react";
import "./ColorInput.css";

export default function ColorInput({ id, name, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <label>
        <input
          type="text"
          id={id}
          name={name}
          value={inputValue}
          onChange={handleInputValue}
        />
      </label>
      <br />
      <label className="color-picker">
        <input
          className="color-input"
          type="color"
          value={inputValue}
          onChange={handleInputValue}
        />
      </label>
    </>
  );
}
