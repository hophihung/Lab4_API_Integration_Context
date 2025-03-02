import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://user-auth-api-nestjs.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("Interceptor error:", error);
        return Promise.reject(error);
    }
);