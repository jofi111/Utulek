import { useEffect, useState } from "react";
import rawData from "./dogsData.json";
import PageContainer from "./components/PageContainer/PageContainer";
import DogList from "./components/DogList/DogList";
import DogForm from "./components/DogForm/DogForm";

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
    setNewDog(updatedDog);
    validateData(updatedDog);
  };

  // useEffect(() => {
  //   console.log(listOfDogs);
  // }, [listOfDogs]);

  return (
    <div className="App">
      <PageContainer>
        <DogList data={listOfDogs} />
        <DogForm data={newDog} validation={valid} onChange={handleChange} />
      </PageContainer>
    </div>
  );
}

export default App;
