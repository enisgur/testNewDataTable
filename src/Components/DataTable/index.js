import React, { useState, useEffect } from "react";

// Table Context
// import { useTableData, useTableOptions, useUpdateHeading } from "./ContextTable/TableContext";
import {
  TableProvider,
  useTableData,
  useTableOptions,
} from "./ContextTable/TableContext";

import LayoutIndex from "./LayoutIndex";

// import Heading from "./Heading";
// import Body from "./Body";

function Index({ data, options }) {
  return (
    <TableProvider>
      <LayoutIndex data={data} options={options} />
    </TableProvider>
  );
}

export default Index;
