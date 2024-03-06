var phoneBook = {
  contact1: {
    name: "Kha",
    phone: "0902956579",
    email: "dinhkha@gmail.com",
  },
  contact2: {
    name: "Hà",
    phone: "0334776264",
    email: "Havo@gmail.com",
  },
};
for (let contact in phoneBook) {
  console.log(contact + ":");
  for (let key in phoneBook[contact]) {
    console.log(" " + key + ":" + phoneBook[contact][key]);
  }
}
