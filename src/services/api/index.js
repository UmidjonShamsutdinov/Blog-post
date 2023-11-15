import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    timeout: 10000
})




instance.interceptors.response.use(
    (response) => {
        if(response) return response
    },
    (error) => {
        if(error.response?.status === 401 || error.response?.status === 403){
            localStorage.removeItem("token")
            localStorage.removeItem("user_id")
            localStorage.removeItem("is_loggedin")
        }
    }
)

export default instance;