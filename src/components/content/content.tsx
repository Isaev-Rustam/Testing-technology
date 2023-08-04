import { FC, ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => (
  <div className="content h-full">{children}</div>
);

export default Content;
