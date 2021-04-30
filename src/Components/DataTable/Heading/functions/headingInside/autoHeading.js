import { mapHeadings, upperCaseFirstChar } from "./functions";

function autoHeading(data) {
  //   console.log(data);
  const headingKeys = mapHeadings(data);

  // const titles = Obj

  return (
    <>
      {headingKeys.map((head) => (
        <th key={head}>{upperCaseFirstChar(head)}</th>
      ))}
    </>
  );
}

export default autoHeading;
