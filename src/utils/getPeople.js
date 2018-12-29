import getName from "./getName";
import getPhoneNumber from "./generateRandomNum";
import getFace from "./getImg";

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
    arr.push(getPeople());
  }
  return arr;
};
