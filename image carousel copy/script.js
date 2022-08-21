
const imag_container=document.getElementById('imag');

const images=document.querySelectorAll('img');
console.log(images);

let idx=0;

function run(){
    idx++;
    if(idx>images.length-1){
        idx=0;
    }
    imag_container.style.transform=`translateX(-${idx*500}px)`;
}

setInterval(run, 2000);