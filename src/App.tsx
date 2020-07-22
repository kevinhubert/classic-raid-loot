import React, { useState, useEffect } from "react";
import { data } from "./data/raid-data";

const { dkptable } = data;

function App() {
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
            {dkptable.map((player) => (
              <div className="list-item">
                <div className="list-item__character">
                  <div className="list-item__character--name">
                    {player.player}
                  </div>
                  <div className="list-item__character--class">
                    {player.class}
                    <div>
                      <img
                        src={`https://wow.zamimg.com/images/wow/icons/large/classicon_${player.class.toLowerCase()}.jpg`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="list-item__dkp">
                  <div className="list-item__dkp--current">
                    Current DKP: {player.dkp}
                  </div>
                  <div className="list-item__dkp--gained">
                    Lifetime Gained: {player.lifetimegained}
                  </div>
                  <div className="list-item__dkp--spent">
                    Lifetime Spent: {Number(player.lifetimespent) * -1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
