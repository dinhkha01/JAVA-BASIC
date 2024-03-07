class Job {
  constructor(id, title, description, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
  inCongViec() {
    return `${this.id} ${this.title} ${this.description} ${this.completed}`;
  }
}

let jobs = [];

function addJob() {
  let n;
  do {
    let id = prompt("mời nhập id");
    let title = prompt("mời nhập tiêu đề công việc");
    let description = prompt("Mời nhập mô tả công việc");
    let completed = prompt("Công việc đã hoàn thành? (yes/no)") === "yes";
    let job = new Job(id, title, description, completed);
    jobs.push(job);
    n = prompt("tiếp tục(số 1)|| dừng lại thì (số 2) ");
  } while (n === "1");
}

function timCongViecTheoId(id) {
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      return jobs[i].inCongViec();
    }
  }
  return "Không tìm thấy";
}

let key;
do {
  key = prompt("Nhập lựa chọn của bạn(từ 1 đến 4)");
  switch (key) {
    case "1":
      addJob();
      break;
    case "2":
      for (let i = 0; i < jobs.length; i++) {
        console.log(jobs[i].inCongViec());
      }
      break;
    case "3":
      let id = prompt("Nhập id công việc bạn muốn tìm");
      console.log(timCongViecTheoId(id));
      break;
    default:
      console.log("Lựa chọn không hợp lệ");
  }
} while (key !== "4");
