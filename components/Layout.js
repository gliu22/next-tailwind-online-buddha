import Head from 'next/head';
import React, { Children } from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Online Buddha' : 'Online Buddha'}</title>
        <meta name="description" content="Online Buddha Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
