import errorHandle from "./errorHandle";
import autoHeading from "./headingInside/autoHeading";

// initial options
import { initialOptions } from "../../../../Data/initialOptions";

// Table Context
import {
  useTableData,
  useTableOptions,
  useUpdateHeading,
} from "../../ContextTable/TableContext";

// add functions; maybe in actions object or array everything inside
// -- hide
// -- sortable  // that should be in heading !! so we can click the heading
// -- THIS IS FOR TABLE BODY type text, input, button, select .....

// function checkHeadings(data, options, headClicked) {
function CheckHeadings() {
  const { contextData } = useTableData();
  const { contextOptions } = useTableOptions();
  const headClicked = useUpdateHeading();

  // console.log("zaaa ", contextData);
  // console.log("zaaa ", contextOptions);

  try {
    // check if data or return null
    if (
      !contextData ||
      contextData === null ||
      contextData === undefined ||
      contextData.length <= 0
    )
      return null;

    // get all options and merge with initialOptions
    // options = { ...initialOptions, ...options };
    const newOptions = { ...initialOptions, ...contextOptions };

    // if no data
    if (
      typeof contextData === "undefined" ||
      typeof contextData === undefined ||
      !contextData
    )
      return errorHandle("no data found in checkHeadings");

    // if data comes in array [{name:"jhon"},{name:"Steve"}];
    //   should be array inside object
    if (Array.isArray(contextData) && !newOptions.isManualHeading) {
      if (typeof contextData !== "object")
        return errorHandle("checkHeading Array inside is not object");

      // make actions if there are some actions for buttons or inputs staff ??

      // return autoHeading(contextData, contextOptions, headClicked);
      // return null;
      return autoHeading(contextData, newOptions, headClicked);
    }

    //   check if heading are coming manuel
    //   manual headings should come with Array inside object
    //   [{title:"name", isShortable:true, isSearchable: true}]
    if (newOptions.isManualHeading && Array.isArray(contextData)) {
      if (typeof contextData !== "object")
        return errorHandle("checkHeading Array inside is not object");
      return null;
    }

    return errorHandle("checkHeading wrong type of heading is coming!");
  } catch (err) {
    return errorHandle("checkHeading something went wrong ! ", err.message);
  }
}

export default CheckHeadings;
