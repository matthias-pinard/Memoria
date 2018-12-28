export default phoneNumber => {
  return phoneNumber.replace(/(\d{2})/g, "$1 ").trim();
};
