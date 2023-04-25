import axios from "axios";

const BASE_URL="http://localhost:3001";

class CategoryService{

    //load all categories
    getCategories(){
        return axios.get(`${BASE_URL}/category/`);
    }

    //add new category
    addCategory(category){
        return axios.post(`${BASE_URL}/category/`,category);
    }

}
// eslint-disable-next-line
export default new CategoryService();