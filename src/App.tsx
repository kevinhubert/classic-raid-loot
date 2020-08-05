import React, { useState, useEffect } from "react";
import DisplayTable from "./components/DisplayTable";

function App() {
  const [table, setTable] = useState("dkptable");
  const viewToggles = [
    { name: "DKP Table", value: "dkptable" },
    { name: "Loot History", value: "loothistory" },
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="row header-primary">
          <div className="col-md-12">
            <h1 className="top-header">Classic Raid Loot - The Departed R2</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="btn-group btn-group-lg button-toggles">
              {viewToggles.map((viewToggle, index) => (
                <button
                  type="button"
                  key={index}
                  className="btn btn-primary"
                  data-toggle={viewToggle.value}
                  onClick={(e) => setTable(viewToggle.value)}
                >
                  {viewToggle.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <DisplayTable currentTable={table} />
        </div>
      </div>
    </div>
  );
}
export default App;
