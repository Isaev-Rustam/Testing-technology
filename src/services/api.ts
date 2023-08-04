import axios from 'axios';

import { routes } from '../types/json-server';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3604/',
  headers: {
    Accept: 'application/json',
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('interceptors.request');
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('interceptors.response');
    return response;
  },
  (error) => Promise.reject(error)
);

const timeDelay = async (t = 1000) =>
  new Promise((res) => {
    setTimeout(() => res(10), t);
  });

export default class Api {
  public static getTodos = async <U>() => {
    await timeDelay(10);
    const response = await axiosInstance.get<U>(routes.Todos);

    if (response.status !== 200) {
      throw new Error('Что-то пошло не так');
    }

    return response.data;
  };

  public static createTodo = async <T>(data: T) =>
    axiosInstance.post(`${routes.Todos}`, data);

  public static deleteTodo = async (id: number) =>
    axiosInstance.delete(`${routes.Todos}/${id}`);

  public static getMonth = async () => axiosInstance.get(`${routes.Month}`);
}
