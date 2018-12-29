let getImage = () => {
  let i = Math.floor(Math.random() * 200);
  return require("./img/" + i + ".jpg");
};

export default nb => {
  let i;
  let arr = [];
  for (i = 0; i < nb; i++) {
    arr.push(getImage());
  }
  return arr;
};
