import { useEffect, useState } from "react";
import rawData from "./dogsData.json"


function App() {
  const [listOfDogs, setListOfDogs] = useState(rawData.dogs);

  useEffect(())=>{console.log(listOfDogs)},[listOfDogs];

  return <div className="App">čisto</div>;
}

export default App;
