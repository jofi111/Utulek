import React from "react";
import "./DogList.css";

function DogList({ data }) {
  return (
    <div className="dog-list">
      {data.map((dog) => {
        return (
          <div className="dog" key={dog.id}>
            <span>
              {dog.name} - {dog.breed} - {dog.age}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default DogList;
