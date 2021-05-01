import React, { useContext, useState } from "react";

const isSorted = React.createContext();
const data = React.createContext();
const clickedHeading = React.createContext();

export function onHeadingClick(e) {
  return useContext();
}

function TableProvider() {
  return (
    <div>
      <h1>WORKING ON CONTEXT API</h1>
    </div>
  );
}

export default TableProvider;
