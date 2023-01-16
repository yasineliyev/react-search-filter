import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <h1>Qarabağ FK - Oyunçular</h1>
      <div className="inputContainer">
        <input
          type="text"
          className="search"
          placeholder="Axtarış..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="dataContainer">
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            } else {
              return false;
            }
          })
          .map((val) => {
            return (
              <div className="data" key={val.id}>
                <img src={val.image} alt="footballer" />
                <h3>{val.title}</h3>
                <p>{val.position}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
