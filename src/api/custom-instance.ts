import axios, { AxiosRequestConfig } from 'axios';

export const AXIOS_INSTANCE = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    withCredentials: true, // 로그인 세션(쿠키) 공유를 위해 필수
});

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
    return AXIOS_INSTANCE(config).then((response) => response.data);
};