export const tableData = function (data, options) {
  return data.map((row, i) => {
    const dataKeys = Object.keys(row);

    return (
      <tr key={checkObjectKeys_TR(row, i)}>
        {finalData(row, dataKeys, options)}
      </tr>
    );
  });
};

const finalData = (row, dataKeys, options) => {
  return dataKeys.map((d, i) => {
    if (options.hide && options.hide.includes(dataKeys[i])) return null;
    return <td key={checkObjectKeys_TD(d, i)}>{row[d]}</td>;
  });
};

const checkObjectKeys_TR = (row, index) => {
  if (row.id) return row.id;
  return index;
};

const checkObjectKeys_TD = (row, index) => {
  // if (row.id) return row.id;
  return index;
};
