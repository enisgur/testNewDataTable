import React from "react";

// functions
import checkHeadings from "./functions/checkHeadings";

function Index({ data, options, headClicked }) {
  // console.log(data);

  return <>{checkHeadings(data, options, headClicked)}</>;
}

export default Index;
