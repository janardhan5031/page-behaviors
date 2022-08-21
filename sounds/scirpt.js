
// here first we creating the buttons with the same name we mentionded in audio as id;
// after that when we click the button which associated with audio id, that audio will be triggered to play.

const sounds=['sound1','sound2','sound3','sound4'];

sounds.forEach((sound) => {
    const btn=document.createElement('button');
    btn.classList.add('btn');
    btn.innerText=sound;

    btn.addEventListener('click', ()=>{
        stopAudio();
        document.getElementById(sound).play();
    });
    document.getElementById('div').appendChild(btn);
});

function stopAudio(){
    sounds.forEach(sound => {
        const song=document.getElementById(sound);
        song.pause();
        song.currentTime=0;
    });
}