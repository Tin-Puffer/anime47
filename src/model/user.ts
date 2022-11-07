export interface user {
    id: string;
    name: string;
    userName?:string,
    email: string;
    img: string;
}
export interface carouselItem {
    id: string;
    img: string;
    name: string;
    description: string;
    status: string;
    ep: string;
    total: string;
}
export interface viewUpdate {
    id: string;
    img: string;
    name: string;
    ep: string;
    total: string;
    view: number;
}
export interface menuselector extends carouselItem {
    view: string;
}
export interface listViewAll {
    id: string;
    select: string;
    list: menuselector[];
}
export interface chain {
    id: string;
    name: string;
    order: string;
    year: string;
}

export interface deltailAnimme {
    id: string;
    img: string;
    name: string;
    description: string;
    status: string;
    ep: string;
    total: string;
    grenre: string[];
    type: string;
    season: string;
    year: string;
    view: number;
    content: string;
    trailer: string;
    chain: chain[];
}
export  interface itemListServer{
    ep:string;
    link:string;
}
export interface listSever {
    id: string;
    mainSV22: itemListServer[];
    BackUpSV23: itemListServer[];
}
export interface ParamWatch{
    id:string| null;
    server:string| null;
    ep: string| null;
}
export interface ParamFilter {
    status?: string | null;
    grenre?: string[];
    type?: string | null;
    season?: string | null;
    year?: string | null;
    sortBy?: string | null;
    name?: string | null;
}
export  interface authMC {
    listMC: deltailAnimme[],
    loadingCabinet:boolean
    loadAdd: boolean,
    loadDelete: boolean
}
