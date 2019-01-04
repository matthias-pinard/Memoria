let getPhoneNumber = () => {
  let end = Math.floor(Math.random() * 999999999);
  console.log(end.toString().length);
  while (end.length < 9) {
    end = "0" + end;
  }
  return "0".concat(end);
};

for (let i = 0; i < 200; i++) {
  console.log(getPhoneNumber());
}
