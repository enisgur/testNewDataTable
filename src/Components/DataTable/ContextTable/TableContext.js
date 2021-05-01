import React, { useContext, useState } from "react";

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
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  function toggleSorted() {
    setIsSorted(!isSorted);
  }
  function onHeaderClick(e) {
    console.log("from Context header clicked : ", e.target.id);
    // console.log("from Context header clicked : ", e);

    //   toggleSorted()
  }

  return (
    <TableDataContext.Provider value={data}>
      <TableOptionsContext.Provider value={options}>
        <UpdateHeadingContext.Provider value={onHeaderClick}>
          {children}
        </UpdateHeadingContext.Provider>
      </TableOptionsContext.Provider>
    </TableDataContext.Provider>
  );
}

export default TableProvider;
