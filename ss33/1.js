let people = {
  ten: "Kha",
  tuoi: 20,
  diachi: "đố biết",
};
for (let key in people) {
  console.log(key + ":" + people[key]);
}
people.ngaySinh = "08";
for (let key in people) {
  console.log("sau khi thêm" + key + ":" + people[key]);
}
delete people.tuoi;
for (let key in people) {
  console.log("sau khi xóa" + key + ":" + people[key]);
}
