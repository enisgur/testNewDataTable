import React, { useContext, useState, useMemo } from "react";

// import functions
import { onHeaderClick } from "./functions/headerClick";

const TableDataContext = React.createContext();
const TableOptionsContext = React.createContext();
const UpdateHeadingContext = React.createContext();
// const isSorted = React.createContext();
// const clickedHeading = React.createContext();

export function useTableData() {
  return useContext(TableDataContext);
}

export function useTableOptions() {
  return useContext(TableOptionsContext);
}

export function useUpdateHeading() {
  return useContext(UpdateHeadingContext);
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

  // function toggleSorted() {
  //   setIsSorted(!isSorted);
  // }

  // function onHeaderClick(e) {
  //   console.log("from Context header clicked : ", e.target.id);
  //   // console.log("from Context header clicked : ", e);

  //   //   toggleSorted()
  // }

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
            })
          }
        >
          {children}
        </UpdateHeadingContext.Provider>
      </TableOptionsContext.Provider>
    </TableDataContext.Provider>
  );
}

export default TableProvider;
