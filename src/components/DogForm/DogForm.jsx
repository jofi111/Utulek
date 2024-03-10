import React, { useState } from "react";
import "./DogForm.css";

function DogForm({ data, onChange, validation }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="dog-form-container">
      <div className="dog-form">
        <input
          type="text"
          placeholder="name of the dog"
          name="name"
          value={data.name}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="breed of the dog"
          name="breed"
          value={data.breed}
          onChange={onChange}
        />
        <div className="age-container">
          <input
            type="number"
            placeholder="age"
            name="age"
            min="0"
            max="32"
            value={data.age}
            onChange={onChange}
            onMouseEnter={() => setShowHint(true)}
            onMouseLeave={() => setShowHint(false)}
          />
          {showHint && (
            <div className="hint-bubble">Age must be 0-32 years</div>
          )}
        </div>
        <button disabled={!validation}>Register</button>
      </div>
    </div>
  );
}

export default DogForm;
