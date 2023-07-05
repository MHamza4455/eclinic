import { type FC, type ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { UserSelector } from "~/components/UserSelector";

const monts = Montserrat({
  subsets: ["latin"],
  preload: true,
  variable: "--font-monts",
});

export const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <UserSelector />

      <main className={`${monts.variable} font-monts`}>{children}</main>
    </>
  );
};
