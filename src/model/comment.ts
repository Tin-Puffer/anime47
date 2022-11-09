export interface commentItemAdd {
    item: commentItem;
    idFilm: string;
    idChild?: string;
}
export interface commentItem {
    id: string;
    name: string;
    img: string;
    type: 1 | 2;
    time: string;
    content: string;
    listRep: commentItem[];
}
export interface comment {
    idFilm: string;
    loading?: boolean;
    isLoading?: boolean;
    listComentAll: commentItem[];
}
