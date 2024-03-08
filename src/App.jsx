import { useEffect, useState } from "react";
import rawData from "./dogsData.json";
import PageContainer from "./components/PageContainer/PageContainer";
import DogList from "./components/DogList/DogList";

function App() {
  const [listOfDogs, setListOfDogs] = useState(rawData.dogs);

  useEffect(() => {
    console.log(listOfDogs);
  }, [listOfDogs]);

  return (
    <div className="App">
      <PageContainer>
        <DogList data={listOfDogs} />
      </PageContainer>
    </div>
  );
}

export default App;
