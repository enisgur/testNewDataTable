import errorHandle from "./errorHandle";

function checkHeadings(data, isManualHeading = false) {
  if (typeof data === "undefined" || typeof data === undefined || !data)
    return errorHandle("no data found in checkHeadings");

  //   console.log(typeof data);

  // if data comes in array [{name:"jhon"},{name:"Steve"}];
  //   should be array inside object
  if (Array.isArray(data)) {
    if (typeof data !== "object")
      return errorHandle("checkHeading Array inside is not object");
    return null;
  }

  //   check if heading are coming manuel
  //   manual headings should come with Array inside object
  //   [{title:"name", isShortable:true, isSearchable: true}]
  if (isManualHeading) {
  }
}

export default checkHeadings;
