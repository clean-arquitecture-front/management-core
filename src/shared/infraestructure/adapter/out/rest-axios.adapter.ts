import axios, { AxiosRequestConfig } from "axios";

import { RestPort } from "../../port/out/rest.port";

export const instance = axios.create({
    baseURL: "http://localhost:8083",
});

export class RestAxios implements RestPort {

    private static instance: RestAxios;

    private constructor() { }

    static getInstance(): RestAxios {
        if (!RestAxios.instance) {
            RestAxios.instance = new RestAxios();
        }
        return RestAxios.instance;
    }

    get<T>(path: string, params: any): Promise<T[]> {
        return instance.get(path, {params});
    }
    post<T>(path: string, entity: T): Promise<T> {
        return instance.post(path, entity);
    }
    delete<T>(path: string): Promise<any> {
        return instance.delete(path);
    }
    put<T>(path: string, entity: T): Promise<any> {
        return instance.put(path, entity);
    }
}