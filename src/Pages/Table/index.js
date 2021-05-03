import React from "react";

import DataTable from "../../Components/DataTable";
// import { testData } from "../../Data/testData";

function Index() {
  const testData = [
    { id: 1, name: "Enis", email: "test@test.com" },
    { id: 2, name: "Jhon", email: "jhon@test.com" },
    { id: 3, name: "Moma", email: "Moma@test.com" },
    { id: 4, name: "Steve", email: "steve@aol.com" },
  ];

  const options = {
    hide: ["id"],
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
