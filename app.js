const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const todo = document.querySelector("#todo");
const remove = `<button>Remove</button>`;
const altdiv = document.querySelector(".altdiv");
const icon = document.getElementById("icon");

let day = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();


window.onload = function () {
  input.focus();
};



// localStorage.setItem("lists",JSON.stringify(todo))
// let lists = localStorage.getItem("lists")
// let todos = JSON.parse(localStorage.getItem("todos")) || [];


btn.addEventListener("click", () => {
  if (!input.value) {
    alert("birşey gir");
  } else {
    todo.innerHTML += `<div class="altdiv" id="altdiv">
    <i  id="icon" class="fa-regular fa-square-full checked icon"></i>
    <p class="par">${input.value}</p>
    <div class="günler">${day}.${month}.${year}  
    <button class="remove">remove</button></div></div>`;
  }
  input.value = "";
});


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});




todo.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove") && e.target.parentElement.parentElement.classList.contains("checked") ) {
    e.target.parentElement.parentElement.remove();
  }else if (!e.target.classList.contains("remove")) {
    
  }else{
    alert("görevi tamamlayınız")
  }
});

 
todo.addEventListener("click" , (e) => {

  if(e.target.classList.contains("icon")){
    
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


