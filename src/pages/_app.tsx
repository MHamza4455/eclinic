import { type AppProps } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import { type NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { RootLayout } from "~/layouts/RootLayout";

/* eslint-disable-next-line @typescript-eslint/ban-types */
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
  pageProps: { session: Session | null };
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <RootLayout>
        <Toaster position="top-center" />
        {getLayout(<Component {...pageProps} />)}
      </RootLayout>
    </SessionProvider>
  );
}

export default api.withTRPC(MyApp);
