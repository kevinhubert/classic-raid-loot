import React, { useState, useEffect } from 'react';
import { data } from './raid-data';

function App() {
  const [raid, setRaid] = useState(data[0]);

  function filterRaid(id: number) {
    const currentRaid = data.filter(raid => raid.id === id);
    setRaid(currentRaid[0]);
  }

  useEffect(() => {});

  return (
    <div className="App">
      <div className="container">
        <div className="row header-primary">
          <div className="col-12">
            <h1 className="text-center">Classic Raid Loot</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              {data.map(raid => (
                <a
                  onClick={() => filterRaid(raid.id)}
                  key={raid.id}
                  href="#"
                  className="list-group-item list-group-item-action"
                >
                  {raid.name}
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-9">
            {raid.loot.map((reward, index) => (
              <div className="reward" key={index}>
                <div className="reward__character">
                  <div className="reward__character--name">
                    {reward.playerName.charAt(0).toUpperCase() +
                      reward.playerName.substring(1)}
                  </div>
                  <div className="reward__character--class">
                    {reward.playerClass.charAt(0).toUpperCase() +
                      reward.playerClass.substring(1)}
                  </div>
                </div>
                <div className="reward__loot">
                  <a
                    className="reward__loot--item"
                    href="#"
                    data-wowhead={`item=${reward.itemID}`}
                  ></a>
                </div>
                <div className="reward__boss">
                  <a
                    href="#"
                    data-wowhead={`npc=${reward.npcID}&domain=classic`}
                  ></a>
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
