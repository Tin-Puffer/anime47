import axios from "axios";
import { AuthMC } from "../../features/auth/authMCSaga";
import { comment, listSever, user } from "../../model";

export const axiosMock_1 = axios.create({

    baseURL: 'https://6362825e37f2167d6f66451d.mockapi.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const apiMock_1 = {
    getDetailList(id: string): Promise<listSever> {
        const URL = '/list';
        return axiosMock_1
            .get(URL, {
                params: {
                    id: id,
                },
            })
            .then((res) => res.data[0]);
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
    getComment(idFilm: string): Promise<comment> {
        const URL = '/comment';
        return axiosMock_1
            .get(URL, {
                params: {
                    idFilm: idFilm,
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
