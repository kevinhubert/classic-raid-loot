import React from "react";

const DkpTable = (props) => (
  <div className="col-md-12">
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Player</th>
          <th scope="col">Current DKP</th>
          <th scope="col">Lifetime Gained DKP</th>
          <th scope="col">Lifetime Spent DKP</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((player, index) => (
          <tr key={index}>
            <th scope="row" className="dkptable__player">
              <div>
                <img
                  src={`https://wow.zamimg.com/images/wow/icons/small/classicon_${player.class.toLowerCase()}.jpg`}
                  alt=""
                />
              </div>
              <div>{player.player}</div>
            </th>
            <td>{player.dkp}</td>
            <td>{player.lifetimegained}</td>
            <td>{player.lifetimespent}</td>
          </tr>
        ))}

        <tr></tr>
      </tbody>
    </table>
  </div>
);

export default DkpTable;
