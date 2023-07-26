import { AppProps } from "next/app";
import dynamic from 'next/dynamic';
import "../styles/globals.css";

import { MSWWrapperProps } from '@/lib/msw';

const MSWWrapper = dynamic<MSWWrapperProps>(() =>
    import('@/lib/msw').then(({ MSWWrapper }) => MSWWrapper)
);

function MyApp({ Component, pageProps, ...rest }: AppProps) {
  return <Component {...pageProps} key={rest.router.asPath} />;
}

export default MyApp;
