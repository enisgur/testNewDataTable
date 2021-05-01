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
    </>
  );
}

export default autoHeading;
