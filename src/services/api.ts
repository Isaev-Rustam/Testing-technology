import axios from 'axios';

import { routes, Todo } from '../types/json-server';

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

const timeDelay = async (t = 1000): Promise<number> =>
  new Promise((res) => {
    setTimeout(() => res(10), t);
  });

export default class Api {
  static getTodos = async () => {
    await timeDelay(10);
    const response = await axiosInstance.get<Todo>(routes.Todos);

    if (response.status !== 200) {
      throw new Error('Что-то пошло не так');
    }

    return response.data;
  };

  static createTodo = async (data: Todo) =>
    axiosInstance.post(`${routes.Todos}`, data);

  static deleteTodo = async (id: number) =>
    axiosInstance.delete(`${routes.Todos}/${id}`);

  static getMonth = async () => axiosInstance.get(`${routes.Month}`);
}
