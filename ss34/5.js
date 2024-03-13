const names = ["Nguyễn Dinh Kha ", "Vũ Thị Tram Anh", "Nguyễn Minh Cu"];

function displayNames(names) {
  const listElement = document.getElementById("namesList");

  for (let i = 0; i < names.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = names[i];
    listElement.appendChild(listItem);
  }
}

displayNames(names);
