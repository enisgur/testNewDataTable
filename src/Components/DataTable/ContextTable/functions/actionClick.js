export function onActionClick(e, rowDataID, rowData, providerOptions) {
  const { contextOptions } = providerOptions;
  const prop = e.target.id;

  if (!rowDataID) return contextOptions.onActionClick(rowData);
  return contextOptions.onActionClick(prop);
}

export function onInputChange(e, key, rowID, providerData, providerOption) {
  // const { contextData, contextSetData } = providerData;
  const { contextOptions } = providerOption;
  contextOptions.onInputChange(e, key, rowID);

  // @TODO - if there is no id then check options to get which data to compore!

  // BELLOW WAS WORKING
  // if (!rowID) return console.log("no rowID");
  // function editState() {
  //   return contextSetData((prevState) => {
  //     return prevState.map((eachItem) =>
  //       eachItem.id === rowID
  //         ? { ...eachItem, [key]: e.target.value }
  //         : eachItem
  //     );
  //   });
  // }
  // editState();
}
