//Do all Authentication Related Stuffs here, See below Example 




// import { anyWebRequest } from '../NetworkManager';
// import qs from 'qs';
// import apiUrl from '../apiUrl';
// import { UserStore, CourseStore, MeisterBoardStore } from '../../stores';
// import FeedStore from '../../stores/FeedStore';

// class Auth {
//     constructor() {
//         this.signUp = this.signUp.bind(this);
//         this.logIn = this.logIn.bind(this);
//         this.logOut = this.logOut.bind(this);
//         this.setSession = this.setSession.bind(this);
//     }

//     getUserToken() {
//         const user_token = localStorage.getItem('user_token')
//         if (user_token) {
//             return user_token;
//         }
//         return null
//     }
//     isAdmin() {
//         return JSON.parse(localStorage.getItem('isAdmin'))
//     }

//     isAuthenticated() {
//         if (this.getUserToken()) {
//             return true
//         } else {
//             return false
//         }
//     }

//     signUp(payload) {
//         var config = {
//             data: qs.stringify(payload),
//         }
//         return anyWebRequest(apiUrl.END_URL.Auth.signup, 'post', config)
//             .then(response => {
//                 this.setSession('user_token', response.data.token)
//                 this.setSession('isAdmin', UserStore.adminEmails.includes(payload.username))
//                 UserStore.userProfile = response.data.profile;
//                 UserStore.fetchUser()
//                 CourseStore.fetchAllCourses()
//                 CourseStore.fetchAllCoursesSubmition()
//                 MeisterBoardStore.fetchMeister()
//                 FeedStore.fetchFeed()
//                 return response
//             })
//     }

//     logIn(payload) {
//         var config = {
//             data: qs.stringify(payload),
//         }
//         return anyWebRequest(apiUrl.END_URL.Auth.login, 'post', config)
//             .then(response => {
//                 // console.log("Response", response);
//                 this.setSession('user_token', response.data.token)
//                 this.setSession('isAdmin', UserStore.adminEmails.includes(payload.username))
//                 UserStore.userProfile = response.data.profile
//                 CourseStore.fetchAllCourses()
//                 UserStore.fetchUser()
//                 CourseStore.fetchAllCoursesSubmition()
//                 MeisterBoardStore.fetchMeister()
//                 FeedStore.fetchFeed()
//                 return response
//             })
//     }
//     sendemail(payload) {
//         var config = {
//             data: qs.stringify(payload),
//         }
//         return anyWebRequest(apiUrl.END_URL.Auth.resetPassword, 'post', config)
//             .then(response => {
//                 // console.log("Response", response);
//                 return response
//             })

//     }
//     sendCourseSubmition(courseSubmissionObject, id = null) {
//         console.log("courseSubmissionObject", courseSubmissionObject);

//         var form_data = new FormData()
//         if (courseSubmissionObject.task_image) {
//             form_data.append("task_image", courseSubmissionObject.task_image)
//             delete courseSubmissionObject.task_image
//         }

//         form_data.append("submission", JSON.stringify(courseSubmissionObject))
//         var config = {
//             data: form_data,
//             headers: { "Authorization": `Bearer ${this.getUserToken()}` }
//         }
//         return anyWebRequest(apiUrl.END_URL.Auth.courseSubmition + "/" + courseSubmissionObject.id, 'post', config)
//             .then(response => {
//                 console.log("Response", response);
//                 return response
//             })
//     }


//     getUserProfile() {
//         var config = {
//             headers: { "Authorization": `Bearer ${this.getUserToken()}` }
//         }
//         return anyWebRequest(`${apiUrl.END_URL.Auth.getProfile}`, 'get', config)
//     }
//     getUserProfilePic() {
//         var config = {
//             headers: { "Authorization": `Bearer ${this.getUserToken()}` }
//         }
//         return anyWebRequest(`${apiUrl.END_URL.Auth.getUserProfilePic}/${this.getUserToken()}`, 'get', config)
//     }

//     getCourses() {
//         var config = {
//             headers: { "Authorization": `Bearer ${this.getUserToken()}` }
//         }
//         return anyWebRequest(`${apiUrl.END_URL.Auth.courses}/getall`, 'get', config)
//     }
//     getCourseById(id) {
//         var config = {
//             headers: { "Authorization": `Bearer ${this.getUserToken()}` }
//         }
//         return anyWebRequest(`${apiUrl.END_URL.Auth.courses}/${id}`, 'get', config)
//     }
//     getCourseSubmitionById(id) {
//         var config = {
//             headers: { "Authorization": `Bearer ${this.getUserToken()}` }
//         }
//         return anyWebRequest(`${apiUrl.END_URL.Auth.courseSubmition}/${id}`, 'get', config)
//     }
//     getMeisterBoard() {
//         var config = {
//             headers: { "Authorization": `Bearer ${this.getUserToken()}` }
//         }
//         return anyWebRequest(`${apiUrl.END_URL.Auth.meisterBoard}`, 'get', config)
//     }
//     getCommunityFeed() {
//         var config = {
//             headers: { "Authorization": `Bearer ${this.getUserToken()}` }
//         }
//         return anyWebRequest(`${apiUrl.END_URL.Auth.communityFeed}`, 'get', config)
//     }
//     logOut() {
//         return new Promise((resolve, reject) => {
//             UserStore.reset();
//             CourseStore.reset();
//             localStorage.removeItem('user_token');
//             resolve('logOut');
//         })
//     }

//     changePassword(payload) {
//         var config = {
//             data: {
//                 oldpass: payload.oldpass,
//                 newpass: payload.newpass
//             },
//             headers: { "Content-Type": "application/json" }
//         }
//         var user_token = this.getUserToken()
//         // return anyWebRequest(`${apiUrl.END_URL.Auth.changePassword}/${userAuth.user_id}?access_token=${userAuth.access_token}`,'put',config)
//         //         .then(response=>{
//         //             localStorage.removeItem('user_auth');
//         //             return  Promise.all([
//         //                     passwordHandler.removeAll(),
//         //                     folderHandler.removeAll()
//         //                 ])
//         //         })
//         //         .then(clearedDataBase=>{
//         //             return "changed password and cleared database"
//         //         })
//     }

//     updateProfile(payload) {
//         var config = {
//             data: payload instanceof FormData ? payload : qs.stringify(payload),
//             headers: { "Authorization": `Bearer ${this.getUserToken()}` }
//         }
//         return anyWebRequest(apiUrl.END_URL.Auth.updateProfile, 'post', config)
//             .then(response => {
//                 return response
//             })
//     }
//     updateProfilePic(payload) {
//         var config = {
//             data: payload instanceof FormData ? payload : qs.stringify(payload),
//             headers: { "Authorization": `multipart/form-data ${this.getUserToken()}` }
//         }

//         return anyWebRequest(apiUrl.END_URL.Auth.uploadProfilePic, 'post', config)
//             .then(response => {
//                 return response
//             })
//     }

//     deleteAccount() {
//         var config = {
//             data: {},
//             headers: { "Content-Type": "application/json" }
//         }
//         var user_token = this.getUserToken()
//         // return anyWebRequest(`${apiUrl.END_URL.Auth.deleteAccount}/${userAuth.user_id}?access_token=${userAuth.access_token}`,'delete',config)
//         //         .then(response=>{
//         //             localStorage.removeItem('user_auth');
//         //             return  Promise.all([
//         //                     passwordHandler.removeAll(),
//         //                     folderHandler.removeAll()
//         //                 ])
//         //         })
//         //         .then(clearedDataBase=>{
//         //             return "account deleted and cleared database"
//         //         })
//     }

//     refreshToken() {
//         console.log("refreshToken called");

//         var userAuth = this.getUserAuth()
//         var newConfig = {
//             params: {
//                 grant_type: apiUrl.GRANT_TYPE.refresh_token,
//                 refresh_token: userAuth.refresh_token
//             },
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             auth: {
//                 username: apiUrl.USER_NAME,
//                 password: apiUrl.PASSWORD
//             }
//         }
//         var user_auth;
//         // return anyWebRequest(apiUrl.END_URL.Auth.refreshToken,'post',newConfig)
//         //         .then(responseSignIn=>{
//         //             user_auth = responseSignIn.data;
//         //             user_auth.user_id = userAuth.user_id
//         //             user_auth.token_validity = Date.now()+((user_auth.expires_in-30)*1000)
//         //             this.user_auth = user_auth;
//         //             this.setSession('user_auth',JSON.stringify(user_auth));
//         //             return user_auth
//         //         })
//     }

//     setSession(key, value) {
//         localStorage.setItem(key, value)
//     }

//     getSession(key) {
//         return localStorage.getItem(key)
//     }
// }

// export default new Auth()
