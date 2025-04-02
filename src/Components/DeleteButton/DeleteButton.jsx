import "./DeleteButton.css";
import { useState } from "react";

export function DeleteButton({ onDelete }) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  function handleDeleteClick() {
    if (!isConfirmed) {
      setIsConfirmed(true);
      return;
    }
    onDelete();
    setIsConfirmed(false);
  }

  function handleCancel() {
    setIsConfirmed(false);
  }

  return (
    <div>
      {isConfirmed ? (
        <div>
          <p className="color-card-highlight">
            Are you sure you want to delete this color?
          </p>
          <button onClick={handleDeleteClick}>DELETE</button>
          <button onClick={handleCancel}>CANCEL</button>
        </div>
      ) : (
        <button className="delete-button" onClick={handleDeleteClick}>
          DELETE
        </button>
      )}
    </div>
  );
}
