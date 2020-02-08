import axios, { AxiosInstance } from "axios";


const BASE_URL = "https://pokeapi.co/api/v2/";

export type QueryParams = {
    offset?: number;
    limit?: number;
};

export class HttpService {

    axios: AxiosInstance = axios.create({ baseURL: BASE_URL });

    public get(path: string, queryParams?: QueryParams) {
        return this.axios.get(path, {
            params: { ...queryParams }
        });
    }

}
