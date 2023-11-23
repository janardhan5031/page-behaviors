const btn=document.getElementById('btn');
const container=document.getElementById('container');

btn.addEventListener('click',()=>{
    console.log('clicked');
    const ele=document.createElement('div');
    ele.innerHTML='this is an error!';
    container.appendChild(ele);
    ele.classList.add("toast");
    setTimeout(()=>{
        ele.remove();   //remove msg from screen after 2 sec i.e this created div element will be removed from the parent element
    },4000)
})