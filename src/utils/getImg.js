export default () => {
  let i = Math.floor(Math.random() * 200);
  return require("./img/" + i + ".jpg");
};
