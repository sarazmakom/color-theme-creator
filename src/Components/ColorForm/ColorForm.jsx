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
        <label htmlFor="role">
          Role
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
        <label htmlFor="hex">
          HEX value
          <br />
          <ColorInput id="hex" name="hex" defaultValue={initialData.hex} />
        </label>
      </div>
      <div>
        <label htmlFor="contrastText">
          Contrast text
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
