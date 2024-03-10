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

  useEffect(() => {
    console.log(listOfDogs);
  }, [listOfDogs]);

  return (
    <div className="App">
      <PageContainer>
        <DogList data={listOfDogs} />
        <DogForm data={newDog} />
      </PageContainer>
    </div>
  );
}

export default App;
