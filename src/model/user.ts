
export interface user{
    id:string,
    name:string
}
export interface carouselItem {
    id: number;
    img: string;
    name: string;
    ep: string;
    fep: string;
}
export interface menuselector extends carouselItem {
    view:number;
    decriptTitle?:string;
}
