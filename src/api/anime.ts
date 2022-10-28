import axios from 'axios';
const axiosMock_10 = axios.create({
    baseURL: 'https://63566b9e9243cf412f842b92.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
    },
});
export const carouselApi = {
    getAll(): Promise<any> {
        const URL = '/carousel';
        return axiosMock_10.get(URL);
    },
    getMostView(value: string): Promise<any> {
        const URL = '/menuselcet';
        return axiosMock_10.get(URL, {
            params: {
                id: value,
            },
        });
    },
};
