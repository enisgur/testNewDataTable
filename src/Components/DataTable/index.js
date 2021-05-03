import React from "react";

// Table Context
import { TableProvider } from "./ContextTable/TableContext";

import LayoutIndex from "./LayoutIndex";

function Index({ data, options }) {
  return (
    <TableProvider>
      <LayoutIndex data={data} options={options} />
    </TableProvider>
  );
}

export default Index;
