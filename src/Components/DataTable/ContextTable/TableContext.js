import React, { useContext, useState, useMemo } from "react";

// import functions
import { onHeaderClick } from "./functions/headerClick";
import { onActionClick } from "./functions/actionClick";

const TableDataContext = React.createContext();
const TableOptionsContext = React.createContext();
const UpdateHeadingContext = React.createContext();
const OnActionClickedContext = React.createContext();
// const isSorted = React.createContext();

// all table data
export function useTableData() {
  return useContext(TableDataContext);
}

// all options data
export function useTableOptions() {
  return useContext(TableOptionsContext);
}

// when one of the header clicked // we are sorting data and updating
export function useUpdateHeading() {
  return useContext(UpdateHeadingContext);
}
// when action input is clicked.
export function useActionClicked() {
  return useContext(OnActionClickedContext);
}

export function TableProvider({ children }) {
  const [contextData, contextSetData] = useState([]);
  const [contextOptions, contextSetOptions] = useState({});
  const [isSorted, setIsSorted] = useState(false);

  const providerDataValue = useMemo(() => ({ contextData, contextSetData }), [
    contextData,
    contextSetData,
  ]);
  const providerOptionsValue = useMemo(
    () => ({ contextOptions, contextSetOptions }),
    [contextOptions, contextSetOptions]
  );

  return (
    // <TableDataContext.Provider value={{ contextData, contextSetData }}>
    <TableDataContext.Provider value={providerDataValue}>
      <TableOptionsContext.Provider value={providerOptionsValue}>
        <UpdateHeadingContext.Provider
          value={(e) =>
            onHeaderClick(e, {
              contextData,
              contextSetData,
              isSorted,
              setIsSorted,
              contextOptions,
            })
          }
        >
          <OnActionClickedContext.Provider
            value={(e, rowDataID, rowData) =>
              onActionClick(e, rowDataID, rowData)
            }
          >
            {children}
          </OnActionClickedContext.Provider>
        </UpdateHeadingContext.Provider>
      </TableOptionsContext.Provider>
    </TableDataContext.Provider>
  );
}

export default TableProvider;
