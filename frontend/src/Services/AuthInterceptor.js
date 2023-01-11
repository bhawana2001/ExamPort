import axios from 'axios'
import LocalStorageService from './services/storage/localstorageservice'
import router from './router/router'
import LoginService from './LoginService'

// LocalStorageService
const localStorageService = LocalStorageService.getService()

// Add a request interceptor
axios.interceptors.request.use(
    config => {
        // const token = localStorageService.getAccessToken()
        const token = LoginService.getToken();
        console.log("Inside interceptor");
        if (token) {
            axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
            config.headers['Authorization'] = 'Bearer ' + token
        }
        config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        return response
    },
    function (error) {
        const originalRequest = error.config

        if (
            error.response.status === 401 &&
            originalRequest.url === 'http://localhost:3001/current-user'
        ) {
            router.push('/login')
            return Promise.reject(error)
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            const refreshToken = localStorageService.getRefreshToken()
            return axios
                .post('/generate-token', {
                    refresh_token: refreshToken
                })
                .then(res => {
                    if (res.status === 201) {
                        localStorageService.setToken(res.data)
                        axios.defaults.headers.common['Authorization'] =
                            'Bearer ' + localStorageService.getAccessToken()
                        return axios(originalRequest)
                    }
                })
        }
        return Promise.reject(error)
    }
)