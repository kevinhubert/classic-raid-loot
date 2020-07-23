import React from "react";

const LootHistory = (props) => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Player</th>
            <th scope="col">Item</th>
            <th scope="col">Zone</th>
            <th scope="col">Boss</th>
            <th scope="col">Timestamp</th>
            <th scope="col">DKP Paid</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={index}>
              <td>{item.player}</td>
              <td>
                <a
                  className="reward__loot--item"
                  href="#"
                  data-wowhead={`item=${item.itemnumber}`}
                >
                  {item.itemname}
                </a>
              </td>
              <td>{item.zone}</td>
              <td>{item.boss}</td>
              <td>{item.timestamp}</td>
              <td>{Number(item.cost) * -1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LootHistory;
