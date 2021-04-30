import React from "react";

import Heading from "./Heading";
import Body from "./Body";

function Index({ data }) {
  //   console.log(data);
  return (
    <div>
      <h3>DataTable</h3>
      <table>
        <thead>
          <tr>
            <Heading data={data} />
          </tr>
        </thead>
        <tbody>
          <Body />
        </tbody>
      </table>
    </div>
  );
}

export default Index;
