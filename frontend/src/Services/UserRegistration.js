import axios from "axios"


const Base_Url="http://localhost:3001";


class UserRegistration{

    //to create user
    createUser(user){
        return axios.post(Base_Url+"/user/",user);
    }

}

export default new UserRegistration();