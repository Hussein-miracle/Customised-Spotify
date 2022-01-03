import {songTitles , artists} from "./model.js";



const body = document.querySelector(".body")
const openMenuBtn = document.querySelector(".menu")
const closeMenuBtn = document.querySelector("#menu__close")
const menuIcon = document.querySelector(".menu__icon");

const contentContainer  = document.querySelector(".wrapper");
const contentContainerWrapper  = document.querySelector(".wrapper-main");

const music = document.getElementById("music");

const contentBody = document.querySelector(".wrapper-homepage")
const musicTitle = document.querySelector(".music-player__content--title");

const artistName = document.querySelector(".music-player__content--artist-name")

const playBtn = document.querySelector(".music-btn__play");

const nextBtn = document.querySelector(".music-btn__forward");
const prevBtn = document.querySelector(".music-btn__backward");

const musicCover = document.querySelector(".music-player__content-img");


const progressBar = document.querySelector(".progress-bar");

const progressBarContainer = document.querySelector(".progress");

const musicPlayer = document.querySelector(".music-player__content");








let musicPlay;
let index = 0;

const renderPlayingNow = function (){
    const markup = `<div class="playingNow-wrapper">

    <header class="playingNow__header">
        <button id="playing__close">
            <svg class="icon-white-2 icon-size-1" >
                <use  xlink:href ="./icons/sprite.svg#icon-arrow-left"></use>
            </svg>
        </button>
        

        <h4 class="playingNow__header--title">Playing Now</h4>
    </header>

    <div class="music-main__content">
        <div class="music__player-2">
            <img class="music__player-2__img" src="./images/Baby-Riddim.jpg" alt="Music Cover">
    
            <div class="music__player-2__detail">
                <h3 class="music-title">Baby - Riddim</h3>
                <h4 class="music__artist-name">Fave</h4>
    
                
            </div>
            <svg class="  icon-like">
                <use xlink:href="./icons/sprite.svg#icon-heart">
    
                </use>
            </svg>
            
        </div>

        <div class="music-details">
            <div class="music-details__controls">
                <button>
                    <svg class="music__volume-mute  icon-1 icon-white">
                        <use xlink:href="./icons/sprite2.svg#icon-volume-medium">
    
                        </use>
                    </svg>
                </button>
                
                <div class="music__shuffle-buttons">
                    <button>
                        <svg class="music__volume-mute icon-1">
                            <use xlink:href="./icons/sprite.svg#icon-loop">
        
                            </use>
                        </svg>
                    </button>
                    <button>
                        <svg class="music__volume-mute icon-1">
                            <use xlink:href="./icons/sprite.svg#icon-random">
        
                            </use>
                        </svg>
                    </button>
                </div>

            </div>

            <div class="music__timestamps">

                <p class="music__current-position">00:00</p>

                <p class="music__duration">00:00</p>
                
            </div>
            <section class="music-player-2">
                <div class="music-progress-bar">
                    <div class="music-bar">

                    </div>
                </div>


                <div class="music-player-2__btns">
                    <button  class="music-btn__backward-2">

                    <svg class="music-control__backward-2 icon-2 icon-white-2">
                        <use xlink:href="./icons/sprite.svg#icon-previous2"></use>
                    </svg>
        
                    </button>
        
        
                    <button  class="music-btn__play-2">
                    
                    <svg class="music-control__play-2 icon-2 icon-white-2">
                        <use xlink:href="./icons/sprite.svg#icon-play3">
                        </use>
                    </svg>
                    </button>
        
                    <button  class="music-btn__forward-2">
        
                    <svg class="music-control__forward-2 icon-2 icon-white-2" >
                        <use xlink:href="./icons/sprite.svg#icon-next2">
                        </use>
                    </svg>
                    </button>
                </div>
            </section>
            
        </div>
    </div>



    </div> `;

    contentContainer.innerHTML = ``;
    contentContainer.insertAdjacentHTML("afterbegin",markup)
}

const renderHomepage = function(){
    const markup = `<div class="wrapper-homepage">
    <header class="header__topbar">
      <div class="menu">
        <svg class="menu__icon">
          <use xlink:href="./icons/sprite.svg#icon-menu"></use>
        </svg>
      </div>

      <form class="search" id="search">
        <input
          type="text"
          id="search-input"
          placeholder="Search music title or name"
        />

        <label for="search">
          <button>
            <svg class="search__icon">
              <use xlink:href="./icons/sprite.svg#icon-search"></use>
            </svg>
          </button>
        </label>
      </form>
    </header> 

    <section class="content">
      <div class="recommended">
        <h2 class="content__header">Recommended for you</h2>

        <div class="recommended__cards cards__container">
          <div class="recommended__card-1 recommended-song  mg-rt">
            <img
              src="./images/Peru_Remix.jpg"
              alt="Peru_Remix recommended"
              class="recommended__card--img" data-index="1"
            />
            <h3 class="recommended__card--name">Peru_Remix</h3>
            <h4 class="recommended__card--artist-name">Fire-DML ft Ed-Sheeran</h4>
          </div>

          <div class="recommended__card-2 recommended-song  mg-rt">
            <img
              src="./images/Mood.jpg"
              alt="Mood by 24kGoldin and ian-dior"
              class="recommended__card--img" data-index="8"
              
            />
            <h3 class="recommended__card--name">Mood</h3>
            <h4 class="recommended__card--artist-name">24kGoldn-ft.-Iann-Dior</h4>
          </div>


          <div class="recommended__card-3 recommended-song  mg-rt">
            <img
              src="./images/Love_Nwantinti.jpg"
              alt="Ckay Love_Nwantinti"
              class="recommended__card--img" data-index="0"
            />
            <h3 class="recommended__card--name">Love_Nwantinti</h3>
            <h4 class="recommended__card--artist-name">Ckay</h4>
          </div>

          <div class="recommended__card-4 recommended-song  mg-rt">
            <img
              src="./images/Young_Dumb_Broke.jpg"
              alt="Young_Dumb_Broke Khalid"
              class="recommended__card--img" data-index="3"
            />
            <h3 class="recommended__card--name">Young_Dumb_Broke</h3>
            <h4 class="recommended__card--artist-name">Khalid</h4>
          </div>
          


        </div>
      </div>

      <div class="playlist">
        <h2 class="content__header">My playlist</h2>

        <div class="playlist__cards cards__container">
          <div class="playlist__card playlist-song mg-rt">
            <img
              src="./images/Habibi.jpg"
              alt="Ricky Rich FT ARAM Mafia"
              class="playlist__card--img" data-index="6"
            />
            <h3 class="playlist__card--name">Habibi</h3>
          </div>

          <div class="playlist__card playlist-song mg-rt">
            <img
              src="./images/Industry-Baby.jpg"
              alt="Industry-Baby by LIL-NAS-x"
              class="playlist__card--img" data-index="5"
            />
            <h3 class="playlist__card--name">Industry-Baby</h3>
          </div>
          <div class="playlist__card playlist-song mg-rt">
            <img
              src="./images/Baby-Riddim.jpg"
              alt="Baby-Riddim by FAVE"
              class="playlist__card--img" data-index="4"
            />
            <h3 class="playlist__card--name">Baby-Riddim</h3>
          </div>
          

          <div class="playlist__card playlist-song mg-rt">
            <img
              src="./images/Montero-Call-Me-By-Your-Name.jpg"
              alt="Montero-Call-Me-By-Your-Name"
              class="playlist__card--img" data-index="7"
            />
            <h3 class="playlist__card--name">Montero-Call-Me-By-Your-Name</h3>
          </div>
          <div class="playlist__card playlist-song mg-rt">
            <img
              src="./images/Feeling.jpg"
              alt="Feeling buju"
              class="playlist__card--img" data-index="2"
            />
            <h3 class="playlist__card--name">Feeling</h3>
          </div>
        </div>
      </div>

    </section>

    

  </div>
  

  

  <section class="music-player">
    <div class="progress">
      <div class="progress-bar"></div>
    </div>

    <div class="main-controls">
        <div class="music-player__content">
          <a href="#">
            <img
              src="./images/Love_Nwantinti.jpg"
              alt="Ckay-Love_Nwantinti"
              class="music-player__content-img"
            />
          </a>

          <div class="music-player__content--details">
            <h3 class="music-player__content--title">Love_Nwantinti</h3>

            <h4 class="music-player__content--artist-name dim-text">
              Ckay
            </h4>
          </div>
        </div>

        <div class="music-player__control">
          
            <button class="music-btn__backward">
              <svg
                class="music-control__backward icon-music-controls icon-white-2"
              >
                <use xlink:href="./icons/sprite.svg#icon-previous2"></use>
              </svg>
            </button>

            <button class="music-btn__play">
              <svg class="music-control__play icon-music-controls icon-white-2">
                <use xlink:href="./icons/sprite.svg#icon-play3"></use>
              </svg>
            </button>

            <button class="music-btn__forward">
              <svg
                class="music-control__forward icon-music-controls icon-white-2"
              >
                <use xlink:href="./icons/sprite.svg#icon-next2"></use>
              </svg>
            </button>
          
        </div>
    </div>

  </section>`;

    contentContainer.innerHTML = '';
    contentContainer.insertAdjacentHTML("afterbegin",markup);
}
const  renderSong = function (title){
    music.src = `music/${title}.mp3`;
    music.alt = `${artists[index]}-${title}`;
    musicCover.src = `images/${title}.jpg`;
    


    console.log(index)
    musicTitle.innerText= `${songTitles[index]}`;
    artistName.innerText = `${artists[index]}`;

}

// renderSong(songTitles[index],artists[index]);

const renderPauseBtn = function(){
    const markup = `
        <svg  class="music-control__pause icon-music-controls icon-white-2">
            <use xlink:href="./icons/sprite.svg#icon-pause">
            </use>
        </svg>
                    `;    

    playBtn.innerHTML = "";
    playBtn.insertAdjacentHTML("afterbegin",markup)


}

const renderPlayBtn = function(){
    const markup = `
        <svg class="music-control__play icon-music-controls icon-white-2">
            <use xlink:href="./icons/sprite.svg#icon-play3">
            </use>
        </svg>
                `;
    

    playBtn.innerHTML = "";
    playBtn.insertAdjacentHTML("afterbegin",markup)
}

renderPlayBtn();

const playSong = function(){
    renderPauseBtn();
    music.play();
}
const pauseSong = function(){
    renderPlayBtn();
    music.pause();

}

const playNextSong = function(){
    index++;
    if(index > songTitles.length - 1){
        index = 0;
        renderSong(songTitles[index],artists[index]);
        
    }else{
        renderSong(songTitles[index],artists[index]);
    }
    playSong();

}


const playPreviousSong = function(){
    index--;
    if(index < 0){
        index = songTitles.length -1;
        renderSong(songTitles[index],artists[index]);
    }else{
        renderSong(songTitles[index],artists[index]);
    }
    playSong();

}



const setCurrentProgress = function(e){
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
    contentContainerWrapper.classList.toggle("show-nav");
    

    
})


closeMenuBtn.addEventListener("click",()=>{
    contentContainerWrapper.classList.remove("show-nav");

})



music.addEventListener("ended",playNextSong);
music.addEventListener("timeupdate",setCurrentProgress)

// contentBody.addEventListener("click",function(e){
//     const songs  = e.target.closest(".mg-rt");


// })


const cardSongs1 = document.querySelectorAll(".recommended-song");

cardSongs1.forEach( card => {
    const playImg  = card.querySelector(".recommended__card--img");
    playImg.addEventListener("click" ,() => {
        // console.log(card)
        
        const songTitle  = card.querySelector(".recommended__card--name").innerHTML.trim();
        index = +playImg.dataset.index;

        console.log(playImg)
        console.log(index)
        if(playImg){
            renderSong(songTitle);
            music.play();
            renderPauseBtn();
        }
        

        

        // console.log(song)
        // console.log(song2)
    })
    

})

const cardSongs2 = document.querySelectorAll(".playlist-song");

cardSongs2.forEach( card => {
    const playImg  = card.querySelector(".playlist__card--img");
    playImg.addEventListener("click" ,() => {
        // console.log(card)
        
        const songTitle  = card.querySelector(".playlist__card--name").innerHTML.trim();

        index = +playImg.dataset.index;

        // console.log(playImg)
        // console.log(index)

        if(playImg){
            renderSong(songTitle);
            music.play();
            renderPauseBtn();
        }
        

        

        // console.log(song)
        // console.log(song2)
    })
    

})


