import "./Color.css";
import { useState } from "react";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import ColorForm from "../ColorForm/ColorForm";

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
        <>
          <h3 className="color-card-headline">hex: {color.hex}</h3>
          <h4>color name: {color.role}</h4>
          <p>contrast text: {color.contrastText}</p>
          <DeleteButton onDelete={() => onDelete(color.id)} />
          <button onClick={handleEditClick}>EDIT</button>
        </>
      )}
    </div>
  );
}
