import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { nanoid } from "nanoid";

export default function ColorForm({
  onSubmitColor,
  initialData = {
    role: "primary main",
    hex: "#7C28A9",
    contrastText: "#FFFFFF",
  },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const updatedColor = initialData.id
      ? { ...initialData, ...data }
      : { id: nanoid(), ...data };
    onSubmitColor(updatedColor);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <div>
        <h4>Color role</h4>
        <label htmlFor="role">
          <br />
          <input
            type="text"
            id="role"
            name="role"
            defaultValue={initialData.role}
          />
        </label>
      </div>
      <br />
      <div>
        <h4>HEX value</h4>
        <label htmlFor="hex">
          <br />
          <ColorInput id="hex" name="hex" defaultValue={initialData.hex} />
        </label>
      </div>
      <div>
        <h4>Text contrast</h4>
        <label htmlFor="contrastText">
          <br />
          <ColorInput
            id="contrastText"
            name="contrastText"
            defaultValue={initialData.contrastText}
          />
        </label>
      </div>
      <button type="submit">
        {initialData.id ? "UPDATE COLOR" : "ADD COLOR"}
      </button>
    </form>
  );
}
