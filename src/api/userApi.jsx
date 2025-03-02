import { instance } from "./axiosCilents"

export const userApi = {
    getInforUser: async () => {
        const response = await instance.get('/users/me');
        return response.data;
    },
}