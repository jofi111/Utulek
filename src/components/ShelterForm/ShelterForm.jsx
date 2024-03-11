import React from "react";
import "./ShelterrForm.css";

function ShelterForm() {
  return (
    <div className="shelter-form">
      <input type="number" min="0" placeholder="dog food (kgs)" name="food" />
      <input
        type="number"
        min="0"
        placeholder="vaccines (pcs)"
        name="vaccine"
      />
      <input type="number" min="0" placeholder="pills (pkgs)" name="pills" />
    </div>
  );
}

export default ShelterForm;
