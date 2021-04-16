import httpService from "./httpService";
import {apiUrl} from '../config.json'; 

const apiEndPoint= apiUrl + "/movies";

export function getMovies() {
    return httpService.get(apiEndPoint);
  }

export function getMovie(idMovie) {
return httpService.get(apiEndPoint + '/' + idMovie );
}


export function deleteMovie(id) {

return httpService.delete(apiEndPoint+'/'+id);
}

export function saveMovie(movie) {

  
   if(movie._id){  
    const body = {...movie}
    delete body._id;     
       return httpService.put(apiEndPoint + '/' + movie._id, body)
   }

   return httpService.post(apiEndPoint, movie)
  }
  