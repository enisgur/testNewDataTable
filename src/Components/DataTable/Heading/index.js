import React from "react";

// functions
import checkHeadings from "./functions/checkHeadings";

function Index({ data }) {
  // console.log(data);

  checkHeadings(data);
  return (
    <>
      <th>Title</th>
      <th>Name</th>
    </>
  );
}

export default Index;
