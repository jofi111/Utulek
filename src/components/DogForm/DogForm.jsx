import React from "react";
import "./DogForm.css";

function DogForm({ data }) {
  return (
    <div className="dog-form">
      <input
        type="text"
        placeholder="name of the dog"
        name="name"
        value={data.name}
      />
      <input
        type="text"
        placeholder="breed of the dog"
        name="breed"
        value={data.breed}
      />
      <input
        type="number"
        placeholder="age of the dog (0-32)"
        name="age"
        min="0"
        max="32"
        value={data.age}
      />
      <button>Register the dog</button>
    </div>
  );
}

export default DogForm;
