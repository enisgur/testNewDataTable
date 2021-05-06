import React, { useEffect } from "react";

// Table Context
import { useTableData, useTableOptions } from "./ContextTable/TableContext";

import Heading from "./Heading";
import Body from "./Body";

function LayoutIndex({ data, options }) {
  const { contextSetData } = useTableData();
  const { contextSetOptions } = useTableOptions();

  useEffect(() => {
    if (!data) return null;
    if (data[0]) {
      contextSetData(data);
    }
    if (options) {
      contextSetOptions(options);
    }
  }, [data, options, contextSetData, contextSetOptions]);

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
