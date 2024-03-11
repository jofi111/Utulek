import { useEffect, useState } from "react";
import rawData from "./dogsData.json";
import PageContainer from "./components/PageContainer/PageContainer";
import DogList from "./components/DogList/DogList";
import DogForm from "./components/DogForm/DogForm";
import Toggler from "./components/Toggler/Toggler";
import ShelterForm from "./components/ShelterForm/ShelterForm";

function App() {
  const [listOfDogs, setListOfDogs] = useState(rawData.dogs);
  const [newDog, setNewDog] = useState({
    id:
      listOfDogs.length > 0
        ? Math.max(...listOfDogs.map((dog) => dog.id)) + 1
        : 1,
    name: "",
    breed: "",
    age: "", //prazdny string (ne nula) umozni zobrazeni placeholderu
  });

  const [valid, setValid] = useState(false);

  const validateData = (dog) => {
    if (dog.age === "" || dog.age < 0 || dog.age > 32) {
      setValid(false);
    } else if (dog.name.trim().length === 0) {
      //trim odstrani mezery
      setValid(false);
    } else if (dog.breed.trim().length === 0) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const handleChange = (event) => {
    const updatedDog = { ...newDog, [event.target.name]: event.target.value };
    validateData(updatedDog);
    setNewDog(updatedDog);
  };

  const handleAdd = () => {
    setListOfDogs((listOfDogs) => {
      return [...listOfDogs, newDog];
    });
    const newDogId = newDog.id + 1;
    const updatedDog = {
      id: newDogId,
      name: "",
      breed: "",
      age: "",
    };
    setNewDog(updatedDog);
    validateData(updatedDog);
  };

  // useEffect(() => {
  //   console.log(listOfDogs);
  // }, [listOfDogs]);

  const handleDelete = (idToDelete) => {
    setListOfDogs(listOfDogs.filter((dog) => dog.id !== idToDelete));
  };

  const [activeTab, setActiveTab] = useState(1);
  const handleChoose = (source) => {
    switch (source) {
      case "list-of-dogs": {
        setActiveTab(1);
        break;
      }
      case "shelter-storage": {
        setActiveTab(2);
        break;
      }
      default:
        break;
    }
  };

  const handleAddToStorage = (temp) => {
    const temporaryStorage = {
      food: shelterStorage.food + temp.food,
      vaccines: shelterStorage.vaccines + temp.vaccine,
      pills: shelterStorage.pills + temp.pills,
    };
    setShelterStorage(temporaryStorage);
  };

  const [shelterStorage, setShelterStorage] = useState({
    food: 95,
    vaccines: 20,
    pills: 40,
  });

  const dogsRequirements = {
    food: 5,
    vaccine: 1,
    pills: 2,
  };

  return (
    <div className="App">
      <PageContainer>
        <Toggler active={activeTab} onChoose={handleChoose} />
        {activeTab === 1 && (
          <>
            <DogList data={listOfDogs} onDelete={handleDelete} />
            <DogForm
              data={newDog}
              validation={valid}
              onChange={handleChange}
              onAdd={handleAdd}
            />
          </> //prazdny tag lze misto divu
        )}
        {activeTab === 2 && (
          <>
            <h3>Current stock</h3>
            <p>dog food: {shelterStorage.food} kgs</p>
            <p>vaccines: {shelterStorage.vaccines} pcs</p>
            <p>pills: {shelterStorage.pills} pkgs</p>
            <ShelterForm onAdd={handleAddToStorage} />
          </>
        )}
      </PageContainer>
    </div>
  );
}

export default App;
