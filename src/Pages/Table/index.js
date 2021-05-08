import React from "react";

import DataTable from "../../Components/DataTable";
// import { testData } from "../../Data/testData";

function Index() {
  // const testData2 = [];
  const testData = [
    { name: "Enis", email: "test@test.com", price: 100 },
    { id: 2, name: "Jhon", email: "jhon@test.com", price: 0 },
    { id: 3, name: "Moma", email: "Moma@test.com", price: 0 },
    { id: 4, name: "Ahmet", email: "ahmet@aol.com", price: 20 },
    { id: 5, name: "Steve", email: "steve@aol.com", price: 0 },
  ];

  const options = {
    hide: ["id"],
    // sortable: ["name"],
    sortable: [], // empty array for sort all
    inputs: [
      { prop: "price", type: "text", value: "", placeholder: "enter Value" },
      { prop: "name", type: "text" },
    ],
    actionInputs: [
      { type: "text", value: "Current Value", placeholder: "enter value" },
      { type: "button", value: "Enterasd" },
    ],
  };

  return (
    <div>
      <h2>Table</h2>
      <div>
        <DataTable data={testData} options={options} />
        <br />
        <br />
        <DataTable data={testData} />
      </div>
    </div>
  );
}

export default Index;
