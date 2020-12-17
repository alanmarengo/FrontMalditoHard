import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });

export function Get(url) {
     axiosInstance.get(url)
    .then(result => { console.log(result.data); return result.data; })  
}
