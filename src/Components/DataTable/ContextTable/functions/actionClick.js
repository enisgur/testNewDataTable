export function onActionClick(e, rowDataID, rowData, providerOptions) {
  const { contextOptions } = providerOptions;
  const prop = e.target.id;

  if (!rowDataID) return contextOptions.onInputChange(rowData);
  return contextOptions.onInputChange(prop);
}

export function onInputChange(e, key, rowID, providerData) {
  const { contextData, contextSetData } = providerData;

  // @TODO Get changed row data
  // - update the state
  // return the data-state to outside
  // console.log(e.target.value);
  // console.log(key);
  // console.log(rowID);
  // console.log(providerData.contextData);

  // const { contextData, contextSetData } = providerData;
  // console.log("onInputChangee !!", rowID);

  // @TODO - if there is no id then check options to get which data to compore!
  if (!rowID) return console.log("no rowID");

  function editState() {
    return contextSetData((prevState) => {
      return prevState.map((eachItem) =>
        eachItem.id === rowID
          ? { ...eachItem, [key]: e.target.value }
          : eachItem
      );
    });
  }
  editState();

  console.log("from actionClick : ", contextData);
  // I NEED TO GET NEW VALUE THAT ENTERED
  // PROBLEM I DONT GET THAT BECAUSE WE DONT UPDATE THE STATE
  // HOW CAN I GET THAT VALUE TO UPDATE THE STATE HERE ?

  // contextSetData({...contextData, })

  // console.log(e.target.id);
}
