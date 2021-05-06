import { mapHeadings, upperCaseFirstChar } from "./functions";

function autoHeading(data, options, headClicked) {
  // GET headings keys exp:  id,name,email...
  const headingKeys = mapHeadings(data);

  return (
    <>
      {headingKeys.map((head) => {
        // if hide ?? then dont display that
        if (options.hide && options.hide.includes(head)) return null;
        // if (options.isSortable)

        return (
          <th key={head} id={head} onClick={headClicked}>
            {upperCaseFirstChar(head)}
          </th>
        );
      })}
      {/* if inputs then render inputs */}
      {renderInputs(options)}
    </>
  );
}

function renderInputs(options) {
  // @TODO CHECK HOW MANY IPUTS ARE THERE AND ADD MORE HEADINGS DEPENDS HOW MANY WE NEED
  if (!checkInputs(options)) return null;

  return <th>Actions</th>;
}

function checkInputs(options) {
  // if options has inputs and if its not false
  if (Object.keys(options).includes("inputs") && !options.inputs) return false;
  return true;
}

export default autoHeading;
