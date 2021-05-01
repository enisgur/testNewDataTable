import errorHandle from "./errorHandle";
import autoHeading from "./headingInside/autoHeading";

// initial options
import { initialCheckHeadings } from "../../../../Data/initialOptions";

// add functions; maybe in actions object or array everything inside
// -- hide
// -- sortable  // that should be in heading !! so we can click the heading
// -- THIS IS FOR TABLE BODY type text, input, button, select .....
function checkHeadings(data, options, headClicked) {
  // get all options and merge with initialOptions
  options = { ...initialCheckHeadings, ...options };

  try {
    if (typeof data === "undefined" || typeof data === undefined || !data)
      return errorHandle("no data found in checkHeadings");

    // if data comes in array [{name:"jhon"},{name:"Steve"}];
    //   should be array inside object
    if (Array.isArray(data) && !options.isManualHeading) {
      if (typeof data !== "object")
        return errorHandle("checkHeading Array inside is not object");

      // check if isHide
      // if (isHide)
      // check if sortable
      // make actions if there are some actions for buttons or inputs staff ??

      return autoHeading(data, options, headClicked);
    }

    //   check if heading are coming manuel
    //   manual headings should come with Array inside object
    //   [{title:"name", isShortable:true, isSearchable: true}]
    if (options.isManualHeading && Array.isArray(data)) {
      if (typeof data !== "object")
        return errorHandle("checkHeading Array inside is not object");
      return null;
    }

    return errorHandle("checkHeading wrong type of heading is coming!");
  } catch (err) {
    return errorHandle("checkHeading something went wrong ! ", err.message);
  }
}

export default checkHeadings;
