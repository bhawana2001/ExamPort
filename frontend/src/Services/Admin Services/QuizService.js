import axios from "axios";

const BASE_URL="http://localhost:3001";

class QuizService{

    //get all quizzes
    getQuizzes(){
        return axios.get(`${BASE_URL}/quiz/`)
    }
}
// eslint-disable-next-line
export default new QuizService();