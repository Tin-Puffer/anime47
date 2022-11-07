import axios from 'axios';
import { AuthMC } from '../features/auth/authMCSaga';
import { loginState } from '../features/auth/authSlipe';
import { carouselItem, deltailAnimme, ParamFilter, user } from '../model/user';
const axiosMock_10 = axios.create({
    baseURL: 'https://63566b9e9243cf412f842b92.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
    },
});
const axiosMock_1 = axios.create({
    baseURL: 'https://6362825e37f2167d6f66451d.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const animeList = {
    getDetailList(id: string): Promise<any> {
        const URL = '/list';
        return axiosMock_1.get(URL, {
            params: {
                id: id,
            },
        });
    },
    getUser(userName: string): Promise<user> {
        console.log('u:', userName);
        const URL = '/user';
        return axiosMock_1
            .get(URL, {
                params: {
                    userName: userName,
                },
            })
            .then((res) => res.data[0]);
    },
    getUserMC(id: string): Promise<AuthMC> {
        const URL = '/userMC';
        return axiosMock_1
            .get(URL, {
                params: {
                    id: id,
                },
            })
            .then((response) => response.data[0]);
    },
};
export const carouselApi = {
    getAll(): Promise<carouselItem[]> {
        const URL = '/carousel';
        return axiosMock_10.get(URL).then((res) => {
            return res.data;
        });
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
    getListFilter(): Promise<any> {
        const URL = '/amime47detail';
        return axiosMock_10.get(URL);
    },
    getListSearch(value: string, p: number = 1, l: number = 2): Promise<any> {
        const URL = '/amime47detail';
        return axiosMock_10.get(URL, {
            params: {
                name: value,
                p: p,
                l: l,
            },
        });
    },
};
