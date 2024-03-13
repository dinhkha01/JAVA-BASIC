document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var studentId = document.getElementById("studentId").value;
    var studentName = document.getElementById("studentName").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    if (studentId.length > 6) {
      alert("StudentId phải gồm 6 ký tự");
      return;
    }

    if (studentName == "") {
      alert("StudentName không được để trống");
      return;
    }

    if (age < 18) {
      alert("Age phải có giá trị lớn hơn hoặc bằng 18");
      return;
    }

    var phonePattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (!phonePattern.test(phone)) {
      alert("Phone phải có định dạng là số điện thoại ở VN");
      isValid = false;
    }

    var emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      alert("Email must be a valid email format");
      isValid = false;
    }

    var studentInfo = document.createElement("p");
    studentInfo.textContent =
      "StudentId: " +
      studentId +
      ", StudentName: " +
      studentName +
      ", Age: " +
      age +
      ", Phone: " +
      phone +
      ", Email: " +
      email;
    document.body.appendChild(studentInfo);
  });
