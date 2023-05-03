import { type FC, type ReactNode } from "react";
import { Montserrat } from "next/font/google";

const monts = Montserrat({
  subsets: ["latin"],
  preload: true,
  variable: "--font-monts",
});

export const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <main className={`${monts.variable} font-monts`}>{children}</main>;
};
