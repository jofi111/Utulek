import React, { useState } from "react";
import "./ShelterForm.css";

function ShelterForm() {
  const [tempStorage, setTeempStorage] = useState({
    food: "",
    vaccine: "",
    pills: "",
  });
  return (
    <div className="shelter-form">
      <input
        type="number"
        min="0"
        placeholder="dog food (kgs)"
        name="food"
        value={tempStorage.food}
      />
      <input
        type="number"
        min="0"
        placeholder="vaccines (pcs)"
        name="vaccine"
        value={tempStorage.vaccine}
      />
      <input
        type="number"
        min="0"
        placeholder="pills (pkgs)"
        name="pills"
        value={tempStorage.pills}
      />
    </div>
  );
}

export default ShelterForm;
