import React from "react";
import { data } from "../data/raid-data";
import DkpTable from "./DkpTable";
import LootHistory from "./LootHistory";

const DisplayTable = (props) => {
  if (props.currentTable === "dkptable") {
    return <DkpTable data={data.dkptable} />;
  } else if (props.currentTable === "loothistory") {
    return <LootHistory data={data.loothistory} />;
  } else {
    return (
      <>
        <h1>Nothing Selected</h1>
      </>
    );
  }
};

export default DisplayTable;
