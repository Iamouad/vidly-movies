import axios from "axios"
import {toast} from 'react-toastify'
import logService from "./logService";


// setting headers in all http request (common == all type of requests)
export function setJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt;
}



axios.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400
                       && error.response.status < 500;
  if(!expectedError){
    toast.error("An unexpected error occured")
    logService.log(error)
  }
    return Promise.reject(error)
})

export default{
    get: axios.get,
    post: axios.post,
    delete:axios.delete,
    patch: axios.patch,
    put: axios.put,
    setJwt
}