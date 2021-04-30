import React from "react";

// functions
import checkHeadings from "./functions/checkHeadings";

function Index({ data }) {
  // console.log(data);

  return <>{checkHeadings(data)}</>;
}

export default Index;
