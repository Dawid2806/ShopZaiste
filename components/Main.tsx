import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="flex-grow flex flex-col bg-teal-100 h-screen  p-6  md:flex-row">
      {children}
    </main>
  );
};
