import axios from 'axios';
import { deltailAnimme } from '../model/user';
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
    getMainView(): Promise<any> {
        const URL = '/homenewupdate';
        return axiosMock_10.get(URL);
    },
    getGrenreView(): Promise<any> {
        const URL = '/amime47detail';
        return axiosMock_10.get(URL, {
            params: {
                grenre: 'Xuyên Không - Chuyển Kiếp',
                p: 1,
                l: 8,
            },
        });
    },
    getManyView(): Promise<any> {
        const URL = '/amime47detail';
        return axiosMock_10.get(URL, {
            params: {
                sortBy: 'view',
                order: 'descp',
                p: 1,
                l: 8,
            },
        });
    },
    getDetail(id: string): Promise<any> {
        const URL = '/amime47detail';
        return axiosMock_10.get(URL, {
            params: {
                id: id,
            },
        });
    },
};
