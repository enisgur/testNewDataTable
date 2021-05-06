const data = [
  { name: "Jhon", email: "jhon@test.com", price: 89 },
  { name: "Steve", email: "Ssteve@test.com", price: 0 },
  { name: "Megan", email: "Megan@test.com", price: 20 },
];

const options = {
  inputs: [
    { prop: "name", type: "text" },
    { prop: "price", type: "text" },
  ],
};

const init = (data, options) => {
  // console.log(JSON.stringify(data));
  console.log(data);

  const allOptions = options.inputs.map((option) => option.prop);
  console.log(allOptions);

  return data.map((d) => {
    const objectKeys = Object.keys(d);
    objectKeys.map((key) => {
      if (allOptions.includes(key)) return console.log("input : ", key);
      return console.log("null :", key);
    });

    // if (allOptions.includes(objectKeys)) return console.log("yess")

    // console.log('no')
  });
};

init(data, options);
