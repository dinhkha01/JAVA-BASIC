function nhap(event) {
  event.preventDefault(); // Prevent the default form submission

  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let age = parseInt(document.getElementById("age").value);
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  if (id.length !== 6) {
    alert("StudentId phải gồm 6 ký tự.");
    return;
  }

  if (name.trim() === "") {
    alert("StudentName không được để trống.");
    return;
  }

  if (age < 18) {
    alert("Age phải có giá trị lớn hơn hoặc bằng 18.");
    return;
  }

  let phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  if (!phoneRegex.test(phone)) {
    alert("Phone phải có định dạng là số điện thoại ở VN.");
    return;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Email phải có định dạng email.");
    return;
  }

  let studentInfo = document.createElement("p");
  studentInfo.textContent =
    "Student ID: " +
    id +
    "\nStudent Name: " +
    name +
    "\nAge: " +
    age +
    "\nPhone: " +
    phone +
    "\nEmail: " +
    email;

  document.getElementById("output").appendChild(studentInfo);
}

// Attach the submit event listener to the form
document.getElementById("studentForm").addEventListener("submit", nhap);
