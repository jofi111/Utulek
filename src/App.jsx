import { useEffect, useState } from "react";
import rawData from "./dogsData.json";
import PageContainer from "./components/PageContainer/PageContainer";
import DogList from "./components/DogList/DogList";
import DogForm from "./components/DogForm/DogForm";

function App() {
  const [listOfDogs, setListOfDogs] = useState(rawData.dogs);

  useEffect(() => {
    console.log(listOfDogs);
  }, [listOfDogs]);

  return (
    <div className="App">
      <PageContainer>
        <DogList data={listOfDogs} />
        <DogForm />
      </PageContainer>
    </div>
  );
}

export default App;
