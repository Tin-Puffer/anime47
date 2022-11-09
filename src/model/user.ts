import { deltailAnimme } from "./anime";

export interface user {
    id: string;
    name: string;
    userName?: string;
    email: string;
    img: string;
}
export interface topMember {
    id: string;
    name: string;
    img: string;
    lever: string;
}

export interface authMC {
    listMC: deltailAnimme[];
    loadingCabinet: boolean;
    loadAdd: boolean;
    loadDelete: boolean;
    loadDataCabinet: boolean;
}
export interface ParamWatch {
    id: string | null;
    server: string | null;
    ep: string | null;
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

