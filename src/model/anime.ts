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
export interface itemListServer {
    ep: string;
    link: string;
}
export interface listSever {
    id: string;
    mainSV22: itemListServer[];
    BackUpSV23: itemListServer[];
}