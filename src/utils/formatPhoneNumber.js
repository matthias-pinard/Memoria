export default phoneNumber => {
  phoneNumber = phoneNumber.replace(/[^\d]/g, "");
  return phoneNumber.replace(/(\d{2})/g, "$1 ").trim();
};
