import { RES_PER_PAGE,STARTING_PAGE } from "./config.js"



export const state = {
    results: [],
    search:{
        query:"",
        musics:[],
        pageNumber: STARTING_PAGE,
        songsPerPage:RES_PER_PAGE,
    },
    likes:[],
}



//datas

export const songTitles = ["Love_Nwantinti","Peru_Remix","Feeling","Young_Dumb_Broke","Baby-Riddim","Industry-Baby","Habibi","Montero-Call-Me-By-Your-Name","Mood"];

export const artists = ["Ckay","Fireboy_DML_ft_Ed_Sheeran","LadiPoe-Ft-Buju","Khalid","Fave","Lil-Nas-X-Ft-Jack-Harlow","Ricky Rich FT ARAM Mafia","Lil-Nas-X","24kGoldn-ft.-Iann-Dior"];


