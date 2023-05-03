import Image from "next/image";
import Link from "next/link";
import { type ReactNode, type FC } from "react";

export const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="m-auto flex min-h-screen w-full max-w-screen-2xl flex-col">
        <div className="m-auto flex h-20 w-11/12 items-center">
          <Link href="/" className="inline-block h-14 w-14">
            <Image
              className="h-full w-full"
              src="/images/logos/company-logo.png"
              width={500}
              height={500}
              alt="Logo of the company"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs pb-28 md:max-w-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};
