import httpService from "./httpService";
import {apiUrl} from '../config.json'; 

const apiEndPoint= apiUrl + "/genres";

export function getGenres() {
    return httpService.get(apiEndPoint);
  }
  