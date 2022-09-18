const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const todo = document.querySelector("#todo");
// const size = document.querySelector("#size");
const remove = `<button>Remove</button>`;
const altdiv = document.querySelector(".altdiv");
const icon = document.getElementById("icon");

let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

// window.onload = function () {
//   input.focus();
// };

window.addEventListener("load", () => {
  let data = localStorage.getItem("toDos");

  if (data === null) {
    localStorage.setItem("toDos", JSON.stringify([]));
  } else {
    let data = JSON.parse(localStorage.getItem("toDos"));
    // console.log(data);
    data.forEach((element) => {
      starter(element);
    });
  }
});

// window.addEventListener("resize",()=>{
//     size.innerHTML = window.innerWidth
//     console.log(window.innerWidth)
// })

const starter = (element) => {
  // console.log(element)
  todo.innerHTML += `<div class="altdiv" id="altdiv">
    <i  id="icon" class="fa-regular fa-square-full checked icon"></i>
    <p class="par">${element.text}</p>
    <div class="günler">${element.day}.${element.month}.${element.year}  
    <button class="remove">remove</button></div></div>`;
};

const adding = () => {
  if (!input.value) {
    alert("birşey gir");
  } else {
    todo.innerHTML += `<div class="altdiv" id="altdiv">
    <i  id="icon" class="fa-regular fa-square-full checked icon"></i>
    <p class="par">${input.value}</p>
    <div class="günler">
    ${day}.${month}.${year}  
    <button class="remove">remove</button></div>
    </div>`;

    let dataTemplate = {
      text: input.value,
      day: day,
      month: month,
      year: year,
    };
    // console.log(dataTemplate)
    let toDos = JSON.parse(localStorage.getItem("toDos"));
    toDos.push(dataTemplate);
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }
  input.value = "";
};

btn.addEventListener("click", adding);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

todo.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("remove") &&
    e.target.parentElement.parentElement.classList.contains("checked")
  ) {
    e.target.parentElement.parentElement.remove();

    // console.log(e.target.parentElement.parentElement.lastChild.previousElementSibling.innerHTML);

    let toDos = JSON.parse(localStorage.getItem("toDos"));
    let removedList = toDos.filter(
      (element) =>
        element.text !==
        e.target.parentElement.parentElement.lastChild.previousElementSibling
          .innerHTML
    );
    console.log(removedList);
    localStorage.setItem("toDos", JSON.stringify(removedList));
  } else if (!e.target.classList.contains("remove")) {
  } else {
    alert("görevi tamamlayınız");
  }
});

todo.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon")) {
    if (e.target.parentElement.classList.contains("checked")) {
      e.target.classList.remove("fa-solid", "fa-check");
      e.target.classList.add("fa-regular", "fa-square-full");

      e.target.parentElement.classList.remove("checked");
    } else {
      e.target.parentElement.classList.add("checked");
      e.target.classList.remove("fa-regular", "fa-square-full");
      e.target.classList.add("fa-solid", "fa-check");
    }
  }
});
