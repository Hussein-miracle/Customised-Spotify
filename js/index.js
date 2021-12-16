// "use strict";
//configs 

const musicTitleMax = 16;


//

const body = document.querySelector(".body")
const openMenuBtn = document.querySelector(".menu")
const closeMenuBtn = document.querySelector("#menu__close")
const menuIcon = document.querySelector(".menu__icon");

const music = document.getElementById("music");

const musicTitle = document.querySelector(".music-player__content--title");

const artistName = document.querySelector(".music-player__content--artist-name")

const playBtn = document.querySelector(".music-btn__play");

const nextBtn = document.querySelector(".music-btn__forward");
const prevBtn = document.querySelector(".music-btn__backward");

const musicCover = document.querySelector(".music-player__content-img")

const btnContainer  = playBtn.querySelector("svg");

const progressBar = document.querySelector(".progress-bar");

const progressBarContainer = document.querySelector(".progress")

//datas

const songTitles = ["Love_Nwantinti","Young_Dumb_Broke","Baby-Riddim","Industry-Baby","Habibi","Montero-Call-Me-By-Your-Name"];

const artists = ["Ckay","Khalid","Fave","Lil-Nas-X-Ft-Jack-Harlow","Ricky Rich FT ARAM Mafia","Lil-Nas-X"];

let musicPlay;
let index = 0;

function renderSong(title){
    music.src = `music/${title}.mp3`;
    music.alt = `${artists[index]}-${title}`;
    musicCover.src = `images/${title}.jpg`;
    if(artists[index].length > musicTitleMax){
        artistName.style.fontSize = "10px";

    }else{
        artistName.style.fontSize = "42.5%";
    }
    if(songTitles[index].length > musicTitleMax){
        musicTitle.style.fontSize = "12px";
    }else{
        musicTitle.style.fontSize = "52.5%";
    }
    musicTitle.innerText= `${songTitles[index]}`;
    artistName.innerText = `${artists[index]}`;

}

renderSong(songTitles[index],artists[index]);

function renderPauseBtn(){
    const markup = `
        <svg  class="music-control__pause icon-size-1 icon-white-2">
            <use xlink:href="./icons/sprite.svg#icon-pause">
            </use>
        </svg>
                    `;    

    playBtn.innerHTML = "";
    playBtn.insertAdjacentHTML("afterbegin",markup)


}

function renderPlayBtn(){
    const markup = `
        <svg class="music-control__play icon-size-1 icon-white-2">
            <use xlink:href="./icons/sprite.svg#icon-play3">
            </use>
        </svg>
                `;
    

    playBtn.innerHTML = "";
    playBtn.insertAdjacentHTML("afterbegin",markup)
}

renderPlayBtn();

function playSong(){
    renderPauseBtn();
    music.play();
}
function pauseSong(){
    renderPlayBtn();
    music.pause();

}

function playNextSong(){
    index++;
    if(index > songTitles.length - 1){
        index = 0;
        renderSong(songTitles[index],artists[index]);
        
    }else{
        renderSong(songTitles[index],artists[index]);
    }
    playSong();

}


function playPreviousSong(){
    index--;
    if(index < 0){
        index = songTitles.length -1;
        renderSong(songTitles[index],artists[index]);
    }else{
        renderSong(songTitles[index],artists[index]);
    }
    playSong();

}



function setCurrentProgress(e){
    // console.log(e.srcElement)
    const {duration , currentTime} = e.srcElement;

    // console.log(duration , currentTime);
    progressBar.style.width = `${(currentTime / duration) * 100}%`;

}



let pauseRendered = false;

////////  EVENT LISTENERS;
progressBarContainer.addEventListener("click",(e) => {
    // console.log(e.offsetX);
    // console.log(e.srcElement.clientWidth);
    const position = e.offsetX 
    const width = e.srcElement.clientWidth;
    const p = (position / width)
    music.currentTime = p * music.duration;
    // console.log(music.currentTime)
})
nextBtn.addEventListener("click",playNextSong);

prevBtn.addEventListener("click",playPreviousSong);



playBtn.addEventListener("click",() => {
    playBtn.classList.toggle("play");

    const musicPlaying = playBtn.classList.contains("play");
    // const musicNotPlaying = playBtn.className === "music-btn__play";
    
    if(musicPlaying){
        playSong();
    }else{
        pauseSong();
    }
})

//nav button not yet full fixed
openMenuBtn.addEventListener("click",()=>{
    body.classList.toggle("show-nav");
    

    
})


closeMenuBtn.addEventListener("click",()=>{
    body.classList.remove("show-nav");

})



music.addEventListener("timeupdate",setCurrentProgress)
music.addEventListener("ended",playNextSong);


