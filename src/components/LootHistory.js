import React from "react";

const LootHistory = (props) => {
  const getLootTimeData = (timestampId) => {
    let timestamp = timestampId;
    var date = new Date(timestamp * 1000).toLocaleDateString("en-US");
    var time = new Date(timestamp * 1000).toLocaleTimeString("en-US");
    return `${date} - ${time}`;
  };
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Player</th>
            <th scope="col">Item</th>
            <th scope="col">Zone</th>
            <th scope="col">Timestamp</th>
            <th scope="col">DKP Paid</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={index}>
              <td>
                <strong>{item.player}</strong>
              </td>
              <td>
                <a
                  className="reward__loot--item"
                  href="#"
                  data-wowhead={`item=${item.itemnumber}&domain=classic`}
                >
                  {item.itemname}
                </a>
              </td>
              <td>{item.zone}</td>
              <td>{getLootTimeData(item.timestamp)}</td>
              <td>{Number(item.cost) * -1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LootHistory;
