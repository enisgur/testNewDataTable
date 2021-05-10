import JSXReturns from "./ClassJSXReturns";

export const finalData = (row, dataKeys, options, onInputChange) => {
  // if no option unputs render normal with no inputs
  if (!options || !options.inputs) return dataNoInputs(row, dataKeys, options);

  // if inputs then return with inputs
  return dataWithInputs(row, dataKeys, options, onInputChange);
};

function dataNoInputs(row, dataKeys, options) {
  return dataKeys.map((d, i) => {
    if (options.hide && options.hide.includes(dataKeys[i])) return null;

    return new JSXReturns(i, row[d]).displayTD();
    // return <td key={checkObjectKeys_TD(d, i)}>{row[d]}</td>;
  });
}

function dataWithInputs(row, dataKeys, options, onInputChange) {
  // get all option inputs keys to check if there any input props
  const allOptionProps = options.inputs.map((options) => options.prop);

  return dataKeys.map((dataKey, i) => {
    // if there are row data that need to be hide return nothing (null)
    if (options.hide && options.hide.includes(dataKeys[i])) return null;

    // if data doesn't have hide option => show data on row
    if (allOptionProps.includes(dataKey))
      return new JSXReturns(
        i,
        row[dataKey],
        onInputChange,
        row,
        dataKeys[i]
      ).displayInput();
    return new JSXReturns(i, row[dataKey]).displayTD();
  });
}
