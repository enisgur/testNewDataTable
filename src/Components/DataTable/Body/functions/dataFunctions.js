import { initialOptions } from "../../../../Data/initialOptions";
import { finalData } from "./Returns/bodyData";
import { renderActionInputs } from "./Returns/bodyActions";

export const tableData = function (
  data,
  options,
  onActionClicked,
  onInputChange
) {
  // get initial options and mix them with new options
  const newOptions = { ...initialOptions, ...options };

  return data.map((row, i) => {
    const dataKeys = Object.keys(row);

    return (
      <tr key={checkObjectKeys_TR(row, i)}>
        {finalData(row, dataKeys, newOptions, onInputChange)}
        {renderActionInputs(newOptions, row, onActionClicked)}
      </tr>
    );
  });
};

// UNIQ KEY FOR Table TR
const checkObjectKeys_TR = (row, index) => {
  // @TODO TO-DO if some of them dont have id then if we return row.id then some of them gets same key
  // maybe just leave it just index or do something else
  // that code is working with no problem. if you want to change it be carefull dont give same key
  // if (row.id) return row.id;
  return index;
};
