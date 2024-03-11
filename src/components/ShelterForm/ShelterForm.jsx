import React, { useEffect, useState } from "react";
import "./ShelterForm.css";

function ShelterForm({ onAdd }) {
  const [tempStorage, setTempStorage] = useState({
    food: "",
    vaccine: "",
    pills: "",
  });

  const [disable, setDisable] = useState(true);

  const handleStorage = (event) => {
    // setTempStorage({
    //   ...tempStorage,
    //   [event.target.name]: event.target.value,
    // });
    //toto lze i nedynamicky:
    const source = event.target.name;
    switch (source) {
      case "food": {
        //setTempStorage({...tempStorage, food:event.target.value});
        //vysvetlivka cemu odpovida SPREAD OPERATOR: {...tempStorage} === {food:tempStorage.food, vaccine:tempStorage.vaccine, pills:tempStorage.pills}
        //toto lze take rozepsat:
        setTempStorage({
          food: event.target.value,
          vaccine: tempStorage.vaccine,
          pills: tempStorage.pills,
        });
        break;
      }
      case "vaccine": {
        //setTempStorage({...tempStorage, vaccine:event.target.value});
        setTempStorage({
          food: tempStorage.food,
          vaccine: event.target.value,
          pills: tempStorage.pills,
        });
        break;
      }
      case "pills": {
        //setTempStorage({...tempStorage, pills:event.target.value});
        setTempStorage({
          food: tempStorage.food,
          vaccine: tempStorage.vaccine,
          pills: event.target.value,
        });
        break;
      }
      default: {
        break;
      }
    }
  };

  useEffect(() => {
    console.log(tempStorage);
  }, [tempStorage]);

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
    setTempStorage({
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
