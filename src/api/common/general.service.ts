import { MovieQuery } from "../../components/MovieCarousel.types";
import { api } from "./api.base";

const api_key= "2c6cd383602f9dd84e2c543271f39c40";

export const general = {
  getSessionId: function(){
    const endpoint = '/authentication/guest_session/new'
    return api.get(endpoint, {params:{
      api_key
    }
  })
  },
  closeSessionId: function(session_id:string){
    const endpoint =`/authentication/session`
    return api.delete(endpoint,{ params:{
      guest_session_id: session_id,
      api_key}
  })
  },
  getAll: function({page = 1, target='popular'}:{page:number, target:MovieQuery}){
    const endpoint= `/movie/${target}?api_key=${api_key}&language=en-US&sort_by=popularity
    .desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
    return api.get(endpoint, {params:{
      page
    }
  })
  },
  
  getById: function(id:string){
    const endpoint= `/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity
    .desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
    return api.get(endpoint, {params:{
      id
    }
  })
  }
}

export const logged = {
  rateMovie: function(session_id:string, value:number, movie_id: number){
    const endpoint = `/movie/${movie_id}/rating?api_key=${api_key}&guest_session_id=${session_id}`
    return api.post(endpoint, {
      value: Number(value),
  },{
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  },
}
