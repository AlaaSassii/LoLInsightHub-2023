import axios, { AxiosInstance } from 'axios';
import { baseUrl } from './baseUrl';

const riotGamesApiAxiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
});
