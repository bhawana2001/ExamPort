import axios from "axios"


const Base_Url = "http://localhost:3001";


class LoginService {

    //current user - which is logged in
    getCurrentUser(){
        return axios.get(`${Base_Url}/current-user`);
    }

    //generate token
    generateToken(loginData) {
        return axios.post(`${Base_Url}/generate-token`, loginData);
    }

    //login user : set token in local storage
    loginUser(token) {
        localStorage.setItem("token", token);
        return true;
    }

    //check user is logged in or not
    isLoggedIn() {
        let tokenStr = localStorage.getItem("token")

        if (tokenStr === undefined || tokenStr === '' || tokenStr == null) {
            return false;
        }
        else {
            return true;
        }
    }

    //Logout : remove token from local storage
    logout() {
        localStorage.removeItem("token");
        return true;
    }

    //Get token 
    getToken() {
        return localStorage.getItem("token");
    }

    //set user details into local storage
    setUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    //get user details
    getUser() {
        let usrStr = localStorage.getItem("user");
        if (usrStr != null) {
            return JSON.parse(usrStr);
        }
        else {
            this.logout();
            return null;
        }
    }

    //get  user role
    getUserRole() {
        let user = this.getUser()
        return user.authorities[0].authority;
    }



}

export default new LoginService();