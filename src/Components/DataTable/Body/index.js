//import Table Context
import { useTableData, useTableOptions } from "../ContextTable/TableContext";

// functions
import { tableData } from "./functions/dataFunctions";

function Index() {
  const { contextData } = useTableData();
  const { contextOptions } = useTableOptions();

  return tableData(contextData, contextOptions);
}

export default Index;
