
const btn=document.getElementById('btn');
const colors = ['green','yellow','white','green','red','gray'];
let i=0;

btn.addEventListener('click',() => {
    document.body.style.background=colors[i];
    i++;
    if(i>=colors.length){
        i=0;
    }
})

function randomBg(){
    return `hsl( ${Math.floor( Math.random() * 360 )}, 100%, 50% )`;
}