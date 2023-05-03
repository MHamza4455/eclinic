import { type ReactNode, type FC } from "react";
import { Header } from "~/components/Header";

export const UserLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
