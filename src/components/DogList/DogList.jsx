import React from "react";

function DogList({ data }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <span>
              {item.name} / {item.breed} / {item.age}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default DogList;
