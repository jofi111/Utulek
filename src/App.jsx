import { useEffect, useState } from "react";
import rawData from "./dogsData.json";
import PageContainer from "./components/PageContainer/PageContainer";

function App() {
  const [listOfDogs, setListOfDogs] = useState(rawData.dogs);

  useEffect(() => {
    console.log(listOfDogs);
  }, [listOfDogs]);

  return (
    <div className="App">
      <PageContainer>čisto</PageContainer>
    </div>
  );
}

export default App;
