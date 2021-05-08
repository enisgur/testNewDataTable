export function renderActionInputs(options, rowData, onActionClicked) {
  // @TODO CHECK HOW MANY IPUTS ARE THERE AND ADD MORE HEADINGS DEPENDS HOW MANY WE NEED
  // @TODO CHECK options for onActionClicked what to return (return id? if no id what ? or spesify it on option and use defaul as id ?)
  // @TODO Check all action Types (if date ? "value should be the date" or maybe if Number ? "value should be number ...etc...)

  if (!checkActionInputs(options)) return null;
  if (!options.inputs) return null;

  return options.actionInputs.map((inp, i) => {
    const inputType = inp.type ? inp.type : "button";
    const inputValue = inp.value ? inp.value : "";
    const inputPlaceholder = inp.placeholder ? inp.placeholder : "";

    const rowDataID = rowData.id ? rowData.id : false;
    // const rowDataID = rowData ? rowData : "";

    if (inputType === "button")
      return (
        <td key={i}>
          <button
            // if rowDataID is false than return null so we will check on actionClicked to return whole row
            id={rowDataID ? rowDataID : null}
            onClick={(e) => onActionClicked(e, rowDataID, rowData)}
          >
            {inputValue}
          </button>
        </td>
      );

    return (
      <td key={i}>
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          defaultValue={inputValue}
        />
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
