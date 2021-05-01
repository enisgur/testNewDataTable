import React, { useState } from "react";

// context
// import { useTableData, useTableOptions, useUpdateHeading } from "./ContextTable/TableContext";
import {
  TableProvider,
  useTableData,
  useTableOptions,
} from "./ContextTable/TableContext";

import Heading from "./Heading";
import Body from "./Body";

function Index({ data, options }) {
  // const [isSorted, setIsSorted] = useState(false);

  //   console.log(data);
  // const options = {
  //   isSorable: true,
  // };

  // const headClicked = (e) => {
  //   // check here
  //   console.log(e.target.id);
  //   // sort data

  //   // then set is sorted
  //   setIsSorted(!isSorted);
  // };

  return (
    <div>
      <h3>DataTable</h3>
      <TableProvider>
        <table>
          <thead>
            <tr>
              <Heading />
              {/* <Heading
                data={data}
                options={options}
                headClicked={headClicked}
              /> */}
            </tr>
          </thead>
          <tbody>
            <Body />
          </tbody>
        </table>
      </TableProvider>
    </div>
  );
}

export default Index;
