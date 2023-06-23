import { type AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { api } from "~/utils/api";

import "~/styles/globals.css";
import { type NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { RootLayout } from "~/layouts/RootLayout";
import { ClerkProvider } from "@clerk/nextjs";

/* eslint-disable-next-line @typescript-eslint/ban-types */
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ClerkProvider {...pageProps}>
      <RootLayout>
        <Toaster position="top-center" />
        {getLayout(<Component {...pageProps} />)}
      </RootLayout>
    </ClerkProvider>
  );
}

export default api.withTRPC(MyApp);
