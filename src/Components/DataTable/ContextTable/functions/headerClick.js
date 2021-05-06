// TODO SORT DATE IF DATE CLICKED !

export function onHeaderClick(e, state) {
  const {
    contextData,
    contextSetData,
    isSorted,
    setIsSorted,
    contextOptions,
  } = state;

  let sortedData = [...contextData];
  const prop = e.target.id;

  if (isSorted) {
    contextSetData(sortObject_DESC(sortedData, prop, contextOptions));
    return setIsSorted(!isSorted);
  }
  if (!isSorted) {
    contextSetData(sortObject_ASC(sortedData, prop, contextOptions));
    return setIsSorted(!isSorted);
  }
}

// sort ASC
function sortObject_ASC(state, sortProp, options) {
  // https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
  // check that usefull link for sort, we can add second prop for equals

  if (!checkSortable(sortProp, options)) return state;

  const sortedDataASC = state.sort((a, b) =>
    a[sortProp] > b[sortProp] ? 1 : -1
  );
  //   console.log("check", sortedDataASC);

  return sortedDataASC;
}
// sort DESC
function sortObject_DESC(state, sortProp, options) {
  if (!checkSortable(sortProp, options)) return state;

  const sortedDataDESC = state.sort((a, b) =>
    a[sortProp] > b[sortProp] ? -1 : 1
  );
  //   console.log("check", sortedDataDESC);

  return sortedDataDESC;
}

// check options for sortable
function checkSortable(state, options) {
  if (Object.keys(options).includes("sortable")) {
    // check for sortable array to see which headings are sortable or not
    if (!options.sortable) return false;
    if (options.sortable.includes(state)) return false;

    return true;
  }
  return false; // if sortable not defined do not sort => if you switch to true it will shor all even if its not defined
}
