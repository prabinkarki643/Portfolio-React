//This a file that will create a common webRequest to the server
//Import this whenever we want to request server




// import axios from 'axios';
// import apiUrl from './apiUrl';

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//     //Any Request to Server
//    export function anyWebRequest(endUrl,method='get',config=null){
//             return new Promise((resolve,reject)=>{
//                 const defaultConfig={
//                     url:endUrl,
//                     method: method,
//                     baseURL: apiUrl.BASE_URL
//                 }
//                const finalConfig = Object.assign(defaultConfig, config);
//                 axios(finalConfig).then(response=>{
//                     resolve(response)
//                 }).catch(error=>{
//                     if (error.response) {
//                         const err = error.response.data;
//                         // console.log(err)
//                         reject(err)
//                     } else if (error.request) {
//                         // console.log(error.request);
//                         const err = new Error("Request error!!!")
//                         reject(err)                        
//                     } else {
//                         console.log('Error', error.message);
//                         error.message = "Unexpected error occured!!!"
//                         reject(error)                    
//                     }
//                     // console.log(error.config);
                    
//                     })
//             })
//     }