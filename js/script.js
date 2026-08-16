function reveal(){

let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;

let elementTop=reveals[i].getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);

function contador(id,final){

let i=0;

let intervalo=setInterval(()=>{

document.getElementById(id).innerText=i;

i++;

if(i>final) clearInterval(intervalo);

},10)

}



function scrollContacto(){

document.getElementById("contacto").scrollIntoView({
behavior:"smooth"
})


}
// MENU HAMBURGUESA

const toggle=document.getElementById("menu-toggle");
const menu=document.getElementById("menu");

toggle.addEventListener("click",()=>{

menu.classList.toggle("active");

});