const audio=document.getElementById("audio");
const play=document.getElementById("play");
const stop=document.getElementById("stop");
const timerang=document.getElementById("timerang");
const showtimespan=document.getElementById("showtimespan");

// add some events

play.addEventListener("click",togglePlay);
audio.addEventListener("play",updatePlayIcon);
audio.addEventListener("pause",updatePlayIcon);
audio.addEventListener("timeupdate",updateProgress);
stop.addEventListener("click",stopAudio);
// showtimespan.addEventListener("input",setProgress);
timerang.addEventListener("input",setProgress)

// functions

function togglePlay(){
    if(audio.paused){
        audio.play()
    }else{
        audio.pause()
    }
};
function updatePlayIcon(){
    if(audio.paused){
        play.innerHTML='<i class="fa fa-play fa-2x"></i>'
    }else{
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>'

    }
}
function updateProgress(){
    showtimespan.value=(audio.currentTime/audio.duration)*100;
    let min=Math.floor(audio.currentTime/60);
    if(min<10){
        min="0"+(min)
    }
    let sec=Math.floor(audio.currentTime%60)
    if(sec<10){
        sec=' 0'+(sec)
    }
    timerang.innerHTML=`${min}:${sec}`;

};
console.log(updateProgress)
function stopAudio(){
    
    audio.currentTime='0'
  audio.pause();

};
function setProgress(){
audio.currentTime=(timerang.value /100)*audio.duration;
}
