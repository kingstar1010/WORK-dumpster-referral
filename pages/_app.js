import React, { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import './app.scss';

export default function MyApp(params) {
  const router = useRouter();

  // == Google analytics track page navigations ==
  // const handleRouteChange = (url) => {
  //   window.gtag('config', 'G-RDXV7CG97T', {
  //     page_path: url,
  //   });
  // };
  // useEffect(() => {
  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  const { Component: PageComponent, pageProps } = params;
  return (
    <>
      <Head>
        {/*
          Disable input zooming on iOS devices
          Can't be put in _document.js - https://nextjs.org/docs/messages/no-document-viewport-meta
        */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*
          Can't be put in _document.js - https://nextjs.org/docs/messages/no-document-title
        */}
        <title>{"Your Dumpster Pro - Detroit Dumpster Rental"}</title>
      </Head>
      <PageComponent {...pageProps} />
    </>
  );
}