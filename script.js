const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Execute the click Btn
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u2716";
    li.appendChild(span);
  }
  inputBox.value = "";
  seveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      seveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      seveData();
    }
  },
  false
);

function seveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
