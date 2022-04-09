import axios from "axios";

const Http = axios.create({
    baseURL:process.env.REACT_APP_API_URL
})
export const login = async (formData)=> await Http.post('/user/signin',formData);

export const register = async (formData) => await Http.post('/user/signup',formData);

export const getUser = async (username) => await Http.get('/user/list?username='+username)