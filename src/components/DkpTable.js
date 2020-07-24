import React from "react";

const DkpTable = (props) => (
  <div className="col-md-12">
    <table class="table table-hover">
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
          <tr>
            <th scope="row">
              <div>{player.player}</div>
              {player.class}
              <div>
                <img
                  src={`https://wow.zamimg.com/images/wow/icons/large/classicon_${player.class.toLowerCase()}.jpg`}
                  alt=""
                />
              </div>
            </th>
            <td colspan="2">{player.dkp}</td>
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
