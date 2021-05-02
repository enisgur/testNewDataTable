import React, { useState, useEffect } from "react";

// Table Context
// import { useTableData, useTableOptions, useUpdateHeading } from "./ContextTable/TableContext";
import {
  TableProvider,
  useTableData,
  useTableOptions,
} from "./ContextTable/TableContext";

import Heading from "./Heading";
import Body from "./Body";

function LayoutIndex({ data, options }) {
  // const { contextData, contextSetData } = useContext(useTableOptions);
  // const { contextOptions, contextSetOptions } = useContext(useTableOptions);

  //   const zaa = useTableData();
  const { contextSetData } = useTableData();
  const { contextSetOptions } = useTableOptions();

  useEffect(() => {
    if (data[0] && options) {
      contextSetData(data);
      contextSetOptions(options);
    }
  }, []);
  //   }, [data, options]);

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
    </div>
  );
}

export default LayoutIndex;
