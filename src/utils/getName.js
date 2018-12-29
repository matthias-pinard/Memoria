import names from "./names";

export default () => {
  let name_array = names["names"];
  let index = Math.floor(Math.random() * name_array.length);
  return name_array[index];
};
