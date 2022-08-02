const btn=document.getElementById('btn');
const container=document.getElementById('container');

btn.addEventListener('click',()=>{
    const ele=document.createElement('div');
    ele.innerHTML='this is an error!';
    container.appendChild(ele);
    ele.classList.add("toast");
    setTimeout(()=>{
        ele.remove();   //remove msg from screen after 2 sec
    },4000)
})