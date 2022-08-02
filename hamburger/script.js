
const btn=document.getElementById("btn");
const nav=document.getElementById("nav");
//console.log(btn);

btn.addEventListener('click', (event) => {
   // event.preventDefault();
    console.log('click');
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});