//Do all the webRequest except auth here, See below Example

// import {anyWebRequest} from '../NetworkManager';
// import qs from 'qs';
// import apiUrl from '../apiUrl';
// import Auth from '../Auth';

//  class Communication {
//      constructor() {

//      }


//      getCourses() {
//         var config = {
//             headers:{"Authorization":`Bearer ${Auth.getUserToken()}`}
//         }
//         return anyWebRequest(`${apiUrl.END_URL.Auth.courses}/getall`,'get',config)
//     }

//     getCourseById(id) {
//         var config = {
//             headers:{"Authorization":`Bearer ${Auth.getUserToken()}`}
//         }
//         return anyWebRequest(`${apiUrl.END_URL.Auth.courses}/${id}`,'get',config)
//     }
//     getCourseSubmitions() {
//         var config = {
//             headers:{"Authorization":`Bearer ${Auth.getUserToken()}`}
//         }
//         return anyWebRequest(`${apiUrl.END_URL.Auth.courseSubmition}`,'get',config)
//     }
//     // sendEmail() {
//     //     var config = {
//     //         headers:{"Authorization":`Bearer ${Auth.getUserToken()}`}
//     //     }
//     //     return anyWebRequest(`${apiUrl.END_URL.Auth.resetPassword}`,'post',config)
//     // }

//     getCourseSubmitionById(id) {
//         var config = {
//             headers:{"Authorization":`Bearer ${Auth.getUserToken()}`}
//         }
//         return anyWebRequest(`${apiUrl.END_URL.Auth.courseSubmition}/${id}`,'get',config)
//     }
     
// }

// export default new Communication()
