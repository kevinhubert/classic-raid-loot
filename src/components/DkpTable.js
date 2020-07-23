import React from "react";

const DkpTable = (props) => (
  <div className="col-md-12">
    {props.data.map((player, index) => (
      <div className="list-item" key={index}>
        <div className="list-item__character">
          <div className="list-item__character--name">{player.player}</div>
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
);

export default DkpTable;
