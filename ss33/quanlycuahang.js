class Product {
  constructor(id, name, price, expiryDate) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.expiryDate = expiryDate;
  }
}
class Employee {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
class Invoice {
  constructor(sanPham, soLuong, giaTri) {
    this.sanPham = sanPham;
    this.soLuong = soLuong;
    this.giaTri = giaTri;
  }
}
class tapHoa {
  constructor() {
    this.allSanPham = [];
    this.allNhanVien = [];
    this.allHoaDon = [];
  }
  addAllSanPham(product) {
    this.allSanPham.push(product);
  }
  addallNhanVien(employee) {
    this.allNhanVien.push(employee);
  }
  addAllHoaDon(invoice) {
    this.allHoaDon.push(invoice);
  }
  getOverview() {
    let totalRevenue = 0;
    for (let invoice of this.allHoaDon) {
      totalRevenue += invoice.sanPham.price * invoice.soLuong;
    }
    return {
      productCount: this.allSanPham.length,
      employeeCount: this.allNhanVien.length,
      tổngBill: totalRevenue,
    };
  }
}

let store = new tapHoa();
let n;
do {
  let productId = prompt("Nhập ID sản phẩm:");
  let productName = prompt("Nhập tên sản phẩm:");
  let productPrice = prompt("Nhập giá sản phẩm:");
  let productExpiryDate = prompt("Nhập hạn sử dụng sản phẩm (dd/mm/yyyy):");
  let product = new Product(
    productId,
    productName,
    parseFloat(productPrice),
    productExpiryDate
  );

  let employeeId = prompt("Nhập ID nhân viên:");
  let employeeName = prompt("Nhập tên nhân viên:");
  let employeeAge = prompt("Nhập tuổi nhân viên:");
  let employee = new Employee(employeeId, employeeName, parseInt(employeeAge));
  let quantity = prompt("Nhập số lượng sản phẩm:");

  let invoice = new Invoice(product, parseInt(quantity));

  store.addAllSanPham(product);
  store.addallNhanVien(employee);
  store.addAllHoaDon(invoice);
  n = prompt("tiếp tục (1)||dừng lại(2)");
} while (n === "1");
console.log(store.getOverview());
