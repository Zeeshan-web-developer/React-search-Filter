import React, { useState } from "react";
import data from "./info.json";
function App() {
  const [searchTerm, setSearch] = useState(null);

  return (
    <div>
      <input
        type="text"
        id=""
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      {data
        .filter((data) => {
          if (searchTerm == null) {
            return data;
          } else if (
            data.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return data;
          }
        })
        .map((data) => (
          <li>{data.name}</li>
        ))}
    </div>
  );
}

export default App;
