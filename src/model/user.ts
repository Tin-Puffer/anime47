export interface user {
    id: string;
    name: string;
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
export interface menuselector extends carouselItem {
    view: string    ;
}
export interface listViewAll {
    id: string;
    select:string;
    list: menuselector[];
}
