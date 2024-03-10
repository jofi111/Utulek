import React from "react";
import "./DogForm.css";

function DogForm() {
  return (
    <div className="dog-form">
      <input type="text" placeholder="name of the dog" name="name" />
      <input type="text" placeholder="breed of the dog" name="breed" />
      <input
        type="number"
        placeholder="age of the dog (0-32)"
        name="age"
        min="0"
        max="32"
      />
      <button>Register the dog</button>
    </div>
  );
}

export default DogForm;
