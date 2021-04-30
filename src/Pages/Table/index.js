import React from "react";

import DataTable from "../../Components/DataTable";
import { testData } from "../../Data/testData";

function Index() {
  return (
    <div>
      <h2>Table</h2>
      <div>
        <DataTable data={testData} />
      </div>
    </div>
  );
}

export default Index;
