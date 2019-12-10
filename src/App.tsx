import React from "react";
import { data } from "./raid-data";
import { tsConstructorType } from "@babel/types";

class App extends React.Component {
  constructor(props) {
    super(props);
  };


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
              <a href="#" className="list-group-item list-group-item-action">
                Cras justo odio
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="reward">
              <div className="reward__name">Yada</div>
              <div className="reward__class">Priest</div>
              <div className="reward__loot">
                <a href="#" data-wowhead="item=2828">
                  Nissa's Remains
                </a>
              </div>
              <div className="reward__boss">Majordomo</div>
            </div>
            <div className="reward">
              <div className="reward__name">Yada</div>
              <div className="reward__class">Priest</div>
              <a href="#" data-wowhead="item=2828">
                Nissa's Remains
              </a>
              <div className="reward__boss">Majordomo</div>
            </div>
            <div className="reward">
              <div className="reward__name">Yada</div>
              <div className="reward__class">Priest</div>
              <a href="#" data-wowhead="item=2828">
                Nissa's Remains
              </a>
              <div className="reward__boss">Majordomo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
