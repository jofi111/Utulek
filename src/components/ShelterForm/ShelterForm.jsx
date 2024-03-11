import React, { useEffect, useState } from "react";
import "./ShelterForm.css";

function ShelterForm({ onAdd }) {
  const [tempStorage, setTeempStorage] = useState({
    food: "",
    vaccine: "",
    pills: "",
  });

  const [disable, setDisable] = useState(true);

  const handleStorage = (event) => {
    setTeempStorage({
      ...tempStorage,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const temp =
      (tempStorage.food === "" || parseInt(tempStorage.food) === 0) &&
      (tempStorage.vaccine === "" || parseInt(tempStorage.vaccine) === 0) &&
      (tempStorage.pills === "" || parseInt(tempStorage.pills) === 0);
    setDisable(temp);
  }, [tempStorage]);

  const handleClick = () => {
    const storageToSend = {
      food: tempStorage.food === "" ? 0 : parseInt(tempStorage.food),
      vaccine: tempStorage.vaccine === "" ? 0 : parseInt(tempStorage.vaccine),
      pills: tempStorage.pills === "" ? 0 : parseInt(tempStorage.pills),
    };
    onAdd(storageToSend);
    setTeempStorage({
      food: "",
      vaccine: "",
      pills: "",
    });
  };

  return (
    <div className="shelter-form">
      <input
        type="number"
        min="0"
        placeholder="dog food (kgs)"
        name="food"
        value={tempStorage.food}
        onChange={handleStorage}
      />
      <input
        type="number"
        min="0"
        placeholder="vaccines (pcs)"
        name="vaccine"
        value={tempStorage.vaccine}
        onChange={handleStorage}
      />
      <input
        type="number"
        min="0"
        placeholder="pills (pkgs)"
        name="pills"
        value={tempStorage.pills}
        onChange={handleStorage}
      />
      <button disabled={disable} onClick={handleClick}>
        Add to the storage
      </button>
    </div>
  );
}

export default ShelterForm;
