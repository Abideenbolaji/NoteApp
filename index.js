const addButton = document.getElementById("addBtn");
const noteContainer = document.querySelector(".noteContainer");
const inputBox = document.querySelectorAll(".input-box");

addButton.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", true);

  let img = document.createElement("img");
  img.src = "Images/delete.png";

  noteContainer.appendChild(inputBox).appendChild(img);
  storeData();
});

noteContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    storeData();
  } else if (e.target.tagName === "P") {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        storeData();
      };
    });
  }
});

function storeData() {
  localStorage.setItem("data2", noteContainer.innerHTML);
}
storeData();

function getData() {
  noteContainer.innerHTML = localStorage.getItem("data2");
}
getData();
