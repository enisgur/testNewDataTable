import React, { useState } from "react";

import DataTable from "../../Components/DataTable";
// import { testData } from "../../Data/testData";

function Index() {
  const testData = [
    { name: "Enis", email: "test@test.com", price: 100 },
    { id: 2, name: "Jhon", email: "jhon@test.com", price: 0 },
    { id: 3, name: "Moma", email: "Moma@test.com", price: 0 },
    { id: 4, name: "Ahmet", email: "ahmet@aol.com", price: 20 },
    { id: 5, name: "Steve", email: "steve@aol.com", price: 0 },
  ];

  const [data, setData] = useState(testData);

  // console.log(data);
  // const testData2 = [];

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
    onInputChange: (e, key, rowID) => {
      // console.log("zaaaa ", res);
      actionClicked(e, key, rowID, setData, data);
    },
    onActionClick: (res) => {
      console.log("Action clicked ", res);
    },
  };

  return (
    <div>
      <h2>Table</h2>
      <div>
        <DataTable data={data} options={options} />
        <br />
        <br />
        {/* <DataTable data={data} /> */}
      </div>
    </div>
  );
}

export default Index;

function actionClicked(e, key, rowID, setData, data) {
  if (!rowID) return console.log("no rowID");

  // const newData = data.map((prevState) => {
  //   // console.log(key);
  //   if (prevState.id === rowID) return { ...prevState, [key]: e.target.value };

  //   return prevState;
  // });

  // console.log(newData);

  return setData((prevState) => {
    return prevState.map((eachItem) =>
      eachItem.id === rowID ? { ...eachItem, [key]: e.target.value } : eachItem
    );
  });
}
