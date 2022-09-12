const btn = document.querySelector(".buton");
const input = document.querySelector("#input")
const liste = document.querySelector(".ul")
const trash = document.getElementById("trash")
const pen = document.getElementById("pen")
const work = document.getElementById("work")
const check = document.getElementById("checkbox")

btn.addEventListener("click", () => {
    if(!input.value){
        alert("write a to do")
    }else{
      liste.innerHTML += `
              <li>
                <input type="checkbox" id="check" class="check" name="" id="checkbox">
                <p id="work">${input.value}</p>
                <div class="icons">
                    <i id="pen" class="fa-solid fa-pen"></i>
                <i id="trash" class="fa-solid fa-trash"></i>
                </div>
              </li>
`;
    }
    input.value =""
})

input.addEventListener("keydown",(e) => {
    if(e.keyCode === 13){
        btn.click()
    } 
})

window.onload = () =>{
    input.focus()
}

liste.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash')) {
    e.target.parentElement.parentElement.remove();}
  })



check.addEventListener("click", (event) => {
  if (event.target.checked) {
    alert("checked");
  } else {
    alert("not checked");
  }
});







// trash.addEventListener("click",() =>{
// for (let i = 1; i < liste.childElementCount; i++) {
//   liste.childElementCount[i].trash.onclick = function () {
//     var div = this.parentElement.parentElement;
//     div.style.display = "none";
//   };
// }
// })


// liste.addEventListener("click", (e) => {
//   if (e.target.classList.contains("fa-pen")) {
//     input.value= e.target.parentElement.previousElementSibling.innerHTML;
   
    
//   }
// });

//  if (e.target.classList.contains("fa-pen")) {
//    document.getElementById("input").value =
//      e.target.parentNode.childNodes[0].data;
//    submit.value = "EDIT";
//    editItem = e;
//  }


