import React, { useState } from "react";
import { data } from "./raid-data";
import { tsConstructorType } from "@babel/types";

interface State {
  currentRaid: object;
}
class App extends React.Component<{}, { currentRaid: object }> {
  constructor(props: any) {
    super(props);
  }

  render() {
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
              {data[0].loot.map(reward => (
                <div className="reward">
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
                    <a href="#" data-wowhead={`item=${reward.itemID}`}></a>
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
}
export default App;
