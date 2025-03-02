import { instance } from "./axiosCilents"

export const authApi = {
    registerAuth: async (data) => {
        const response = await instance.post('/auth/register', data);
        return response.data;
    },
    loginAuth: async (data) => {
        const response = await instance.post('/auth/login', data);
        return response.data;
    }
}