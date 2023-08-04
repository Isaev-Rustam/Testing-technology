import { createContext } from 'react';

export interface IAppContext {
  title: string;
  author: string;
  url: string;
}

const AdminContext = createContext<IAppContext | null>(null);

export default AdminContext;
