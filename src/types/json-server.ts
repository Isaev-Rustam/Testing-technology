export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface Root {
  todos: Todo[];
}

export const routes = {
  Todos: 'todos',
  Query: 'query',
  Month: 'month',
} as const;

// type Routes = (typeof routes)[keyof typeof routes];

export interface Geo {
  lat: string;
  lng: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
