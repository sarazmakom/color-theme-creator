import "./Color.css";
import { useState } from "react";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";

export default function Color({ color, onDelete, onUpdate }) {
  const [isEdited, setIsEdited] = useState(false);

  const handleEditClick = () => setIsEdited(true);

  const handleUpdateColor = (updatedColor) => {
    onUpdate(updatedColor);
    setIsEdited(false);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {isEdited ? (
        <ColorForm onSubmitColor={handleUpdateColor} initialData={color} />
      ) : (
        <div className="container">
          <div>
            <h3 className="color-card-headline">{color.hex.toUpperCase()}</h3>
            <CopyToClipboard clipText={color.hex} />
          </div>
          <div>
            <h4>{color.role}</h4>
            <h4>{color.contrastText.toUpperCase()}</h4>
          </div>
          <div className="buttons">
            <DeleteButton onDelete={() => onDelete(color.id)} />
            <button onClick={handleEditClick}>EDIT</button>
          </div>
        </div>
      )}
    </div>
  );
}
