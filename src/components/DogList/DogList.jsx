import React from "react";
import "./DogList.css";

function DogList({ data, onDelete }) {
  return (
    <div className="dog-list">
      {data.map((dog) => {
        return (
          <div className="dog" key={dog.id}>
            <span>
              {dog.name} - {dog.breed} - {dog.age}
            </span>
            <button className="btn-remove" onClick={() => onDelete(dog.id)}>
              Remove
            </button>
          </div> /*anonymni fce zamezi spusteni vymazani pri kazdem vyrenderovani
            stranky*/
        );
      })}
    </div>
  );
}

export default DogList;
