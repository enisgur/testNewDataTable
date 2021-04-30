import errorHandle from "./errorHandle";
import autoHeading from "./headingInside/autoHeading";

const initialOptions = {
  isManualHeading: false,
  isSortable: false,
  isHide: false,
  //   type: "text",
};

// add functions; maybe in actions object or array everything inside
// -- hide
// -- sortable
// -- THIS IS FOR TABLE BODY type text, input, button, select .....
function checkHeadings(data, options = initialOptions) {
  console.log(options);
  try {
    if (typeof data === "undefined" || typeof data === undefined || !data)
      return errorHandle("no data found in checkHeadings");

    // if data comes in array [{name:"jhon"},{name:"Steve"}];
    //   should be array inside object
    if (Array.isArray(data) && !options.isManualHeading) {
      if (typeof data !== "object")
        return errorHandle("checkHeading Array inside is not object");
      return autoHeading(data);
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
