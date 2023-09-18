import axios, { AxiosInstance } from 'axios';
import { baseUrl } from './baseUrl';

export const riotGamesApiAxiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
});
