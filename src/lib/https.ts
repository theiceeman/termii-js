import axios from "axios";


export default class Request {
    private baseUrl;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    post = async (url: string, data: any) => {
        try {
            let response = await axios.post(`${this.baseUrl}/${url}`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            return { error: false, data: response.data };
        } catch (error) {
            return { error: true, data: error };
        }
    }

    get = async (url: string, config?: any) => {
        try {
            const headers = config?.headers;
            let response = await axios.get(`${this.baseUrl}/${url}`, {
                ...config,
                headers: {
                    ...headers,
                },
            });
            return { error: false, data: response.data };
        } catch (error) {
            return { error: true, data: error };
        }
    }
};
