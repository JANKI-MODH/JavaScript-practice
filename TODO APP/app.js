
let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function(){
    // console.log(input.value);
    let task = document.createElement("li")
    task.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete"
    delbtn.classList.add("delete");
    input.value = ""
    ul.appendChild(task)
    
    task.appendChild(delbtn);
    
})
// let del = document.querySelector("ul");
ul.addEventListener("click" , function(event){
    // console.log(event.target);
    if(event.target.nodeName =="BUTTON"){
    let list = event.target.parentElement
    list.remove();
    
        
    }
    // console.log("click");
    
})




// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//       let par = this.parentElement;
//       console.log(par);
//       par.remove();
//     })
// }
