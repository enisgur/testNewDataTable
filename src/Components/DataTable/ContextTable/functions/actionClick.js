export function onActionClick(e, rowDataID, rowData) {
  const prop = e.target.id;
  //   console.log("rowDataID ", rowDataID);
  //   console.log("rowData ", rowData);
  //   console.log("action Clicked : ", prop);

  //   @TODO if rowDataID exist
  // @TODO if RowDataID === false => return whole rowData
  if (!rowDataID) return console.log(rowData);
  return console.log(prop);
}
