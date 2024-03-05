// class nhaTu {
//   constructor(ten, tuoi) {
//     this.ten = ten;
//     this.tuoi = tuoi;
//   }
//   chucMung() {
//     return "xin phạm nhân", +this.ten;
//   }
// }
// let tuNhan1 = new nhaTu("Tâm Anh", 18);
// console.log(tuNhan1);
const ten = {
  ho: "Nguyễn",
  ten: "Kha",
  set fullName(name) {
    let tach = name.split(" ");
    this.ho = tach[0];
    this.ten = tach[1];
  },
};
ten.fullName = "Võ Hà";
console.log(ten.ho);
console.log(ten.ten);
