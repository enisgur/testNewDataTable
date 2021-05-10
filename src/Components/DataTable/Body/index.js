//import Table Context
import {
  useTableData,
  useTableOptions,
  useActionClicked,
  useInputChange,
} from "../ContextTable/TableContext";

// functions
import { tableData } from "./functions/dataFunctions";

function Index() {
  const { contextData } = useTableData();
  const { contextOptions } = useTableOptions();
  const onActionClicked = useActionClicked();
  const onInputChange = useInputChange();

  return tableData(contextData, contextOptions, onActionClicked, onInputChange);
}

export default Index;
