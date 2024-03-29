export interface RestPort {
    get<T>(path: string, params: any): Promise<T[]>;
    post<T>(path: string, entity: T): Promise<T>;
    delete<T>(path: string): Promise<T>;
    put<T>(path: string, entity: T): Promise<T>;
}