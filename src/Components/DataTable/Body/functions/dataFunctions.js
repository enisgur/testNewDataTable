import { initialCheckHeadings } from "../../../../Data/initialOptions";
import JSXReturns from "./ClassJSXReturns";

export const tableData = function (data, options) {
  // get initial options and mix them with new options
  const newOptions = { ...initialCheckHeadings, ...options };

  return data.map((row, i) => {
    const dataKeys = Object.keys(row);

    return (
      <tr key={checkObjectKeys_TR(row, i)}>
        {finalData(row, dataKeys, newOptions)}
        {renderActionInputs(newOptions)}
      </tr>
    );
  });
};

const finalData = (row, dataKeys, options) => {
  // if no option unputs render normal with no inputs
  if (!options || !options.inputs) return dataNoInputs(row, dataKeys, options);

  // if inputs then return with inputs
  return dataWithInputs(row, dataKeys, options);
};

function dataNoInputs(row, dataKeys, options) {
  return dataKeys.map((d, i) => {
    if (options.hide && options.hide.includes(dataKeys[i])) return null;

    return new JSXReturns(i, row[d]).displayTD();
    // return <td key={checkObjectKeys_TD(d, i)}>{row[d]}</td>;
  });
}

function dataWithInputs(row, dataKeys, options) {
  // get all option inputs keys to check if there any input props
  const allOptionProps = options.inputs.map((options) => options.prop);

  return dataKeys.map((dataKey, i) => {
    if (options.hide && options.hide.includes(dataKeys[i])) return null;
    // console.log(allOptionProps);

    if (allOptionProps.includes(dataKey))
      return new JSXReturns(i, row[dataKey]).displayInput();
    return new JSXReturns(i, row[dataKey]).displayTD();
  });
}

// FOR UNIQ KEY
const checkObjectKeys_TR = (row, index) => {
  if (row.id) return row.id;
  return index;
};

// ACTIONS

function renderActionInputs(options) {
  // @TODO CHECK HOW MANY IPUTS ARE THERE AND ADD MORE HEADINGS DEPENDS HOW MANY WE NEED
  if (!checkActionInputs(options)) return null;
  if (!options.inputs) return null;

  return options.actionInputs.map((inp, i) => {
    const inputType = inp.type ? inp.type : "text";
    const inputValue = inp.value ? inp.value : "";
    const inputPlaceholder = inp.placeholder ? inp.placeholder : "";
    return (
      <td key={i}>
        {
          <input
            type={inputType}
            placeholder={inputPlaceholder}
            defaultValue={inputValue}
          />
        }
      </td>
    );
  });

  // console.log(options.inputs[0].type);
}

function checkActionInputs(options) {
  // if options has inputs and if its not false
  if (Object.keys(options).includes("actionInputs") && !options.actionInputs)
    return false;

  return true;
}
