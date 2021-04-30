exports.mapHeadings = function (headings) {
  // only get first row, it should be same others
  const headingKeys = Object.keys(headings[0]);
  return headingKeys;
};

exports.upperCaseFirstChar = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
