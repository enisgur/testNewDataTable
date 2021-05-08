//import Table Context
import {
  useTableData,
  useTableOptions,
  useActionClicked,
} from "../ContextTable/TableContext";

// functions
import { tableData } from "./functions/dataFunctions";

function Index() {
  const { contextData } = useTableData();
  const { contextOptions } = useTableOptions();
  const onActionClicked = useActionClicked();

  return tableData(contextData, contextOptions, onActionClicked);
}

export default Index;
