let getRandomNum = () => {
  let i;
  let end = Math.floor(Math.random() * 999999999);
  return "0".concat(end);
};

export default size => {
  let i;
  let arr = [];
  for (i = 0; i < size; i++) {
    arr.push(getRandomNum());
  }
  return arr;
};
