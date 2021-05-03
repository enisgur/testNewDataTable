// TODO SORT DATE IF DATE CLICKED !

export function onHeaderClick(e, state) {
  const { contextData, contextSetData, isSorted, setIsSorted } = state;
  //   const { contextSetData } = state;
  //   console.log(contextData);

  let sortedData = [...contextData];
  const prop = e.target.id;

  //   console.log("from Context header clicked : ", e.target.id);

  if (isSorted) {
    // sortedData = sortObject_DESC(sortedData, prop);
    contextSetData(sortObject_DESC(sortedData, prop));
    setIsSorted(!isSorted);
  }
  if (!isSorted) {
    // sortedData = sortObject_ASC(sortedData, prop);
    contextSetData(sortObject_ASC(sortedData, prop));
    setIsSorted(!isSorted);
  }
}

function sortObject_ASC(state, sortProp) {
  // https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
  // check that usefull link for sort, we can add second prop for equals
  const sortedDataASC = state.sort((a, b) =>
    a[sortProp] > b[sortProp] ? 1 : -1
  );
  //   console.log("check", sortedDataASC);

  return sortedDataASC;
}

function sortObject_DESC(state, sortProp) {
  const sortedDataDESC = state.sort((a, b) =>
    a[sortProp] > b[sortProp] ? -1 : 1
  );
  //   console.log("check", sortedDataDESC);

  return sortedDataDESC;
}
