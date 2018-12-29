import names from "./names";

let getName = () => {
  let name_array = names["names"];
  let index = Math.floor(Math.random() * name_array.length);
  return name_array[index];
};

export default nb => {
  let arr = [];
  let i;
  for (i = 0; i < nb; i++) {
    arr.push(getName());
  }
  return arr;
};
