import names from "./names";

let getName = () => {
  let name_array = names["names"];
  let index = Math.floor(Math.random() * name_array.length);
  return name_array[index];
};

let getPhoneNumber = () => {
  let end = Math.floor(Math.random() * 999999999);
  return "0".concat(end);
};

let getFace = () => {
  let i = Math.floor(Math.random() * 200);
  return require("./img/" + i + ".jpg");
};

let getPeople = () => {
  return {
    face: getFace(),
    name: getName(),
    num: getPhoneNumber()
  };
};

export default nb => {
  let arr = [];
  let i;
  for (i = 0; i < nb; i++) {
    arr.push(getPeople(i));
  }
  return arr;
};
