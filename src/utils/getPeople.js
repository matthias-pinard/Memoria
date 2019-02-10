import names from "./names";

let getName = () => {
  let name_array = names["names"];
  let index = Math.floor(Math.random() * name_array.length);
  return name_array[index];
};

let getPhoneNumber = () => {
  let end = Math.floor(Math.random() * 999999999);
  while (end.toString().length < 9) {
    end = "0" + end;
  }
  return "0".concat(end);
};

let getFace = () => {
  let i = Math.floor(Math.random() * 200);
  return require("./img/" + i + ".jpg");
};

let getPhoneNumbers = i => {
  let arr = [];
  while (arr.length < i) {
    let num = getPhoneNumber();
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
};

let getNames = i => {
  let arr = [];
  while (arr.length < i) {
    let name = getName();
    if (!arr.includes(name)) {
      arr.push(name);
    }
  }
  return arr;
};

let getFaces = i => {
  let arr = [];
  while (arr.length < i) {
    let face = getFace();
    if (!arr.includes(face)) {
      arr.push(face);
    }
  }
  return arr;
};

let getPeoples = nbPeoples => {
  let faces = getFaces(nbPeoples);
  let names = getNames(nbPeoples);
  let nums = getPhoneNumbers(nbPeoples);
  let peoples = [];
  for (let i = 0; i < nbPeoples; i++) {
    peoples.push({ face: faces[i], name: names[i], num: nums[i] });
  }
  return peoples;
};

export default i => getPeoples(i);
